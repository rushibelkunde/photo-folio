import React from 'react'


function Navbar({setCurrentAlbum, setSearch}) {
  return (
  
        <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li onClick={()=> setCurrentAlbum("")}><a href="#" className="nav-link px-2 text-white">PhotoFolio</a></li>
              
            </ul>
    
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" onChange={(e)=> setSearch(e.target.value)} className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
            </form>
    
           
          </div>
        </div>
      </header>

      
    
  )
}

export default Navbar