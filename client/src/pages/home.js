import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';



export const Home = () => {
    const CLIENT_ID = 'aa432ce05d2646c296073c0eaac7686c';
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';

    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
        getPlaylists(token)
    }, [])
    console.log("token ******" + token)

    const logout = () => {
        setToken("")
        window.localStorage.removeItem('token')
        setData({})
    }

    //const [searchKey, setSearchKey] = useState("")
    const [data, setData] = useState({})
   
    const getPlaylists = async (token_param) => {
        await axios.get("https://api.spotify.com/v1/me/playlists", {
            params: {limit: 10, offset: 0}, 
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token_param}`,
                
             },
            })
             .then((response) => {
                setData(response.data);
                console.log("hello *o***" + response.data.items)
                console.log(response.data.items)
              })
              .catch((error) => {
                console.log(error);
              })
              
            }
              


  return (
    <div>
      {console.log("div"+data.items)}
        {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button className='btn' onClick={logout}>Logout</button>}
        <div className='container'>
          <div className='row'>
            {data?.items ? data.items.map((item, index) => 
            <div className='col-3'>
              <img src={item.images[0].url} className='img-thumbnail' />
              <p key={index}>{item.name}</p>
            </div>) : null}
          </div>
        </div>
    </div>

)}
export default Home;