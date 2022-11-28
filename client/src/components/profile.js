import React, { useEffect, useState } from 'react';
import { getCurrentUsersProfile } from './spotify-access';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCurrentUsersProfile();
        setProfile(data);
      } catch(e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
      {profile && (
              <div>
                <h1>{profile.display_name}</h1>
                <p>{profile.followers.total} Followers</p>
                {profile.images.length && profile.images[0].url && (
                  <img src={profile.images[0].url} alt="Avatar"/>
                )}
              </div>
            )}
    </div>
  );
};

export default Profile;