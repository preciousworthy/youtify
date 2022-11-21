const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');
const path = require('path');
const axios = require('axios');
require('url').URLSearchParams;
const buffer = require('buffer');




const app = express();
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

//Spotify oauth credentials
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i =0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state'

//login to Spotify route
app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email';

  const searchParams = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code', 
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope
  })
  const queryParams = searchParams.toString();
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
})

//callback from Spotify login
// this gets us our authorization code from the callback url
app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  console.log("code" + code);

//POST request to get api token
  axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    data: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code, 
      redirect_uri: REDIRECT_URI
    }),
    headers: {
      'content_type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')} `,
    },
  })
    .then(response => {
      if (response.status === 200) {

        const { access_token, refresh_token, expires_in } = response.data;

        const queryParams = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in
        })
      
        //let's redirect back to client
        res.redirect(`http://localhost:3000/?${queryParams}`)
        

       
      } else {
        res.redirect(`/?${new URLSearchParams({ error: 'invalid token'})}`);
        }
      })
    .catch(error => {
      res.send(error);
    })
})

app.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    data: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
  })
})


// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

// create the get request
app.get('/api/news', cors(), async (req, res) => {
  // const STUDENTS = [

  //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
  //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
  //     { id: 3, firstName: 'Fariba', lastName: 'Dadko' },
  //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
  //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
  // ];
  // res.json(STUDENTS);
  try {
    const { rows: news } = await db.query('SELECT * FROM public.news;');
    res.send(news);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post('/api/messages', cors(), async (req, res) => {
  const newMessage = {
    name: req.body.firstname,
    email: req.body.lastname,
    subject: req.body.subject,
    message: req.body.message
  };
  console.log([newMessage.name, newMessage.email, newMessage.subject, newMessage.message]);
  const result = await db.query(
    'INSERT INTO messages(name, email, subject, message) VALUES($1, $2) RETURNING *',
    [newUser.firstname, newUser.lastname],
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

//A put request - Update a student 
app.put('/api/students/:studentId', cors(), async (req, res) =>{
  console.log(req.params);
  //This will be the id that I want to find in the DB - the student to be updated
  const studentId = req.params.studentId
  const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
  console.log("In the server from the url - the student id", studentId);
  console.log("In the server, from the react - the student to be edited", updatedStudent);
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
  const values = [updatedStudent.lastname, updatedStudent.firstname];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);

  }catch(e){
    console.log(e);
    return res.status(400).json({e})
  }
})

// delete request
app.delete('/api/students/:studentId', cors(), async (req, res) =>{
  const studentId = req.params.studentId;
  //console.log("From the delete request-url", req.params);
  await db.query('DELETE FROM students WHERE id=$1', [studentId]);
  res.status(200).end();

});



// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
