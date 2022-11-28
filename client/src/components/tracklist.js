

const TrackList = ({ tracks }) => (
    <>
    {tracks && tracks.length ? (
      <div className="container">
        {tracks.map((track, i) => (
          <li className="track__item" key={i}>
            <div className="track__item__num">{i + 1}</div>
              <div className="track__item__name-artist">
                <div className="track__item__name overflow-ellipsis">
                  <p>{track.name}</p>
                </div>
                <div className="track__item__artist overflow-ellipsis">
                  {track.artists.map((artist, i) => (
                    <span key={i}>
                      {artist.name}{i !== track.artists.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </div>
            <div className="track__item__album overflow-ellipsis">
              {track.album.name}
            </div>
          </li>
        ))}
      </div>
    ) : (
      <p className="empty-notice">No tracks available</p>
    )}
  </>
)

export default TrackList;