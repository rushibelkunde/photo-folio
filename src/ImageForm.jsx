import React from 'react'


function ImageForm({currentAlbum,  handleSubmit, setImage}) {

  

  console.log(currentAlbum)
  


  return (
    
      
       
        <form class="row row-cols-lg-auto g-3 align-items-center my-3" onSubmit={handleSubmit}>
                <div class="col-12">

                    <div class="input-group">

                        <input type="file" class="form-control" id="inlineFormInputGroupUsername" onChange={(e) => setImage(e.target.files[0])} required />
                    </div>
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Add Image</button>
                </div>
            </form>
      
      
    
  )
}

export default ImageForm
