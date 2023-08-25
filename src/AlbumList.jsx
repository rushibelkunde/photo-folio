import React, { useEffect, useState } from 'react'
import AlbumForm from './AlbumForm'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import { storage } from './FirebaseInit'
import { db } from './FirebaseInit'
import AlbumCard from './AlbumCard'

function AlbumList({currentAlbum,setCurrentAlbum}) {

  const [albumList, setAlbumList] = useState([])

  const deleteAlbum = async (id)=>{

    try{
    await deleteDoc(doc(db, "albums", id))

    const albumStorageRef = ref(storage, id);
    await deleteObject(albumStorageRef);

    console.log(`Album ${id} deleted from Firestore and Storage.`);
  } catch (error) {
    console.error("Error deleting album:", error);
  }

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