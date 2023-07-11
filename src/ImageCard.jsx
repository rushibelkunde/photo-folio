import React from 'react'

function ImageCard() {
  return (
    <div class="card imagecard"  style={{ width: "15rem" }}>
            <div class="card-img-top sceleton" style={{ width: "15rem" ,height: "10rem" }}></div>
            <div class="card-body">
              <div class="card-title sceleton" style={{ width: "10rem", height: "10px" }}></div>
              <div style={{ width: "12rem", height: "10px" }} className='sceleton' ></div>
            </div>
          </div>
  )
}

export default ImageCard