import React from 'react'

function ImageView({ imageList }) {
    return (
        <>
        <h2>back</h2>
        <div id="carouselExample" className="carousel slide" style={{ height: "500" }}>
            <div className="carousel-inner">
                {imageList.map((image) => (

                    <div className="carousel-item active" >
                        <img src={image.url} width="500px"  alt="..."></img>
                    </div>

                ))}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" style={{backgroundColor:"black"}} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" style={{backgroundColor:"black"}} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export default ImageView