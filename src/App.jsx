
import './App.css';
import Navbar from './Navbar';
import AlbumList from './AlbumList';

import ImageList from './ImageList';
import ImageView from './ImageView';
import { useState } from 'react'
import ImageCard from './ImageCard';

function App() {
  const [search, setSearch] = useState("")
  const [currentAlbum, setCurrentAlbum] = useState("")
  

  

  
  
  return (
    
    <div className="App">
      {/* <ImageCard/> */}
      <Navbar setCurrentAlbum={setCurrentAlbum} setSearch={setSearch}/>
      {currentAlbum? <ImageList   currentAlbum={currentAlbum} search={search} setSearch={setSearch}/> : <AlbumList currentAlbum={currentAlbum} setCurrentAlbum={setCurrentAlbum}/>}
      
      
    </div>
  );
}

export default App;
