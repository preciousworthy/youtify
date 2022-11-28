import { useEffect, useState } from 'react';
import { logout } from './spotify-access';
import { accessToken } from './spotify-access';
import { getCurrentUsersProfile } from './spotify-access';


export const SpotifyLogin = () => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(accessToken);

        const fetchUser = async () => {
            try {
              const { data } = await getCurrentUsersProfile();
              setUser(data);
            } catch(e) {
              console.error(e);
            }
          };

          console.log(user)
  
          fetchUser();
    }, [])
    

    

  return (
    <div className='container'>
        {!token ? (
          <a href='http://localhost:8080/login' className='btn btn-success'>Login to Spotify</a>
        ) : (
        <span><h2 className='text-center'>Welcome <a href='/profile'>{user.display_name}</a></h2>
        <button className='btn btn-success mb-3'onClick={logout}>Log Out</button></span>)}
    </div>
  )
};
