import React from 'react'

function BugunDoganMezun({mezun}) {
  return (
    <>
       
    
              <td>1</td>
              <td><img src={mezun.resim} className="avatar" alt="Avatar" />{mezun.mezunAdiSoyadi}</td>
              <td>{mezun.email}</td>
              <td>{mezun.telefonNo}</td>
              <td>{mezun.fakulte}</td>
              <td>{mezun.bolum}</td>
          
</>
  )
}

export default BugunDoganMezun