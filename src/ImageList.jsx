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

  

  const deleteImage = (name) => {
    const deleteRef = ref(storage, `${currentAlbum}/${name}`)
    deleteObject(deleteRef).then(setChange(change + 1)).catch((err) => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const imagesRef = ref(storage, `${currentAlbum}/${image.name}`);
    
    uploadBytes(imagesRef, image)
      .then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot);
        
        // After successful upload, increment the change state
        setChange(change + 1);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };
  


 

  useEffect(() => {
    if (currentAlbum !== "") {
      const imagesListRef = ref(storage, `${currentAlbum}/`);
  
      listAll(imagesListRef).then((response) => {
        const promises = response.items.map((item) => {
          return getDownloadURL(item);
        });
  
        Promise.all(promises)
          .then((urls) => {
            const imageArray = response.items.map((item, index) => {
              return { name: item.name, url: urls[index] };
            });
  
            setImageList(imageArray);
          })
          .catch((error) => {
            console.error("Error fetching image URLs:", error);
          });
      });
    } else {
      setImageList([]); // If currentAlbum is empty, clear the image list
    }
  }, [currentAlbum, change]);
  
    

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