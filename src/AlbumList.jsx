import React, { useEffect, useState } from 'react'
import AlbumForm from './AlbumForm'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
// import { deleteObject, ref } from 'firebase/storage'
import { db } from './FirebaseInit'
import AlbumCard from './AlbumCard'

function AlbumList({currentAlbum,setCurrentAlbum}) {

  const [albumList, setAlbumList] = useState([])

  const deleteAlbum = async (id)=>{
    await deleteDoc(doc(db, "albums", id))
  }

  useEffect(()=>{
    async function fetchAlbums(){
      const snapshot = await getDocs(collection(db, "albums"))
      setAlbumList(snapshot.docs.map((doc)=>{
        return{
          id: doc.id,
          ...doc.data()
        }
      }))
    }
    fetchAlbums()
  },[deleteAlbum, currentAlbum])

  

  
  
  return (
    <div className="AlbumList">
        
        <h1>Albums</h1>
        <div className='albumList'>
        <AlbumForm />
        {albumList.map((album)=>(
            <AlbumCard album ={album} currentAlbum={currentAlbum} setCurrentAlbum={setCurrentAlbum} deleteAlbum={deleteAlbum}/>
        ))}

        </div>
        
    </div>
  )
}

export default AlbumList