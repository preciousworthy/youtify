import React from 'react';
import { useEffect, useState } from 'react';
import { accessToken, getCurrentUsersPlaylists } from '../components/spotify-access';
import Footer from '../components/footer.js';


const Home = () => {

    const [token, setToken] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    
 
    useEffect(() => {
        setToken(accessToken);
        //const user = playlists.items[0].owner.display_name;

    //gets User's Playlists data
        const fetchData = async () => {
          try {
            const { data } = await getCurrentUsersPlaylists();
            setPlaylists(data);
          } catch(e) {
            console.error(e);
          }
        };

        fetchData();
        
    }, [])

  
  return (
    <div className='container text-center'>
          <>
          {playlists && (
            <div className='container'>
              <div className='row'>
                {playlists.items.map((item, index) => 
                <div className='col-3'>
                  <a className='' href={`/playlists/${item.id}`}>
                  <img src={item.images[0].url} className='img-thumbnail' alt='playlist art'/>
                  <p key={index}>{item.name}</p>
                  </a>
                </div>)}
              </div>
            </div>
          )}
          </>
          <Footer />
    </div>
   
  

)}
export default Home;