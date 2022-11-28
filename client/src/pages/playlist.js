import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylistById } from '../components/spotify-access';
import axios from 'axios';
import TrackList  from '../components/tracklist';


const Playlist = () => {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [tracksData, setTracksData] = useState(null);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { data } = await getPlaylistById(id);
            setPlaylist(data);
            setTracksData(data.tracks);
        } catch(e) {
            console.error(e);
          };
        };
        fetchData();
        
    }, [id]);

    useEffect(() => {
        if (!tracksData) {
            return;
        }

        const fetchMoreData = async () => {
                if(tracksData.next) {
                    const { data } = await axios.get(tracksData.next);
                    setTracksData(data);
                }
            };

                setTracks(tracks => ([
                    ...tracks ? tracks : [],
                    ...tracksData.items
                ]));
                

    }, [tracksData]);


    const tracksForTracklist = useMemo(() => {
    if (!tracks) {
      return;
    }
    return tracks.map(({ track }) => track);
  }, [tracks]);

  return (
    <div className='container'>
        {playlist && (
            <>
            {playlist.images.length && playlist.images[0].url && (
                <div className='col text-center'>
                <img className='img-thumbnail-sm rounded mx-auto d-block' src={playlist.images[0].url} alt="Playlist Art" />
                </div>
                )}
            <div>
                <h1>{playlist.name}</h1>
                <p>
                    <span>{playlist.tracks.total} {`song${playlist.tracks.total !== 1 ? 's' : ''}`}</span>
                </p>
                {tracks && (
                    <TrackList tracks={tracksForTracklist} />
                )}
            </div>
            </>
        )}
    </div>
    
  )
};

export default Playlist;
