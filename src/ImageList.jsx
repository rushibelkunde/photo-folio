import React from 'react'
import { ref, deleteObject, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "./FirebaseInit"
import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';



import ImageForm from './ImageForm';

function ImageList({ currentAlbum, search }) {
  const [image, setImage] = useState("")
  const [imageList, setImageList] = useState([])
  const [change, setChange] = useState(0)

  const [time, setTime] = useState(false)

  const deleteImage = (name) => {

    const deleteRef = ref(storage, `${currentAlbum}/${name}`)
    deleteObject(deleteRef).then().catch((err) => console.log(err))

    setTimeout(() => {
      setChange(change + 1)
    }, 1000);

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const imagesRef = ref(storage, `${currentAlbum}/${image.name}`);
    uploadBytes(imagesRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot)
    });
    console.log(image)

    setTimeout(() => {
      setChange(change + 1)
    }, 1000);

  }

  setTimeout(()=>{

    setTime(true)

  }, 1000)

  useEffect(() => {
    let array = []
    console.log(currentAlbum)
    if (currentAlbum !== "") {
      const imagesListRef = ref(storage, `${currentAlbum}/`)
      console.log(imagesListRef)
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            array.push({ name: item.name, url: url })
          })
        })
      })
    }
  })
    

  return (
    <>

      <ImageForm currentAlbum={currentAlbum} setImage={setImage} handleSubmit={handleSubmit} />
      <div className='imageList'>
        {console.log(search)}

        {search ? imageList.map((image, i) => (
          <div>

            {image.name.toLowerCase().includes(search.toLowerCase()) ?
              <div class="card" key={i} style={{ width: "18rem" }}>
                <img class="card-img-top" src={image.url} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{image.name}</h5>
                  <h3 style={{ color: "red" }} onClick={() => deleteImage(image.name)}>Delete</h3>
                </div>
              </div>
              : ""}
          </div>

        )) : imageList.map((image, i) => (
          <div class="card" key={i} style={{ width: "18rem" }}>
            <img class="card-img-top" src={image.url} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{image.name}</h5>
              <h3 style={{ color: "red" }} onClick={() => deleteImage(image.name)}>Delete</h3>
            </div>
          </div>

        ))}

      </div>
    </>
  )
}

export default ImageList