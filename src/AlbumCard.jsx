import React from 'react'

function AlbumCard({ album, currentAlbum, setCurrentAlbum, deleteAlbum }) {

  const handleClick = (id) => {
    setCurrentAlbum(id)
  }


  return (

    <>
      
        
         
            <div className="card bg-black" style={{width: "200px", color: "white"}} >
              <div className="card-body text-center" onClick={() => handleClick(album.id)}>
                {album.title}
              </div>
              <div className="btn-group">
                      <button type="button" onClick={() => deleteAlbum(album.id)} className="btn btn-sm btn-outline-secondary">Delete</button>

                    </div>
            </div>

          
        



    </>
  )
}

export default AlbumCard