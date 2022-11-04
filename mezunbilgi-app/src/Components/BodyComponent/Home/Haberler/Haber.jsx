import React from 'react'

function Haber({haber}) {
  return (
    
  
        <>
           <div className="card">
           <img className="card-img-top" src={haber.image} alt="Card image cap" style={{widht:"300px",height:"200px"}}/>
           <div className="card-body">
           <h5 className="card-title">{haber.heading}</h5>
           <p className="card-text">{haber.desc}</p>
           <a href="https://malatyahaber.com/haber/inonu-universitesinde-maas-promosyonu-ihalesi" className="btn btn-primary">Habere Git</a>
           </div>
       </div> 
           </>
   
    
  )
}

export default Haber