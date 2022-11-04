import React from 'react'

function Cv({cv}) {
  return (
    <>

  
              <td>{cv.mezunAdiSoyadi}</td>
              <td>{cv.bolum}</td>
              <td>{cv.mezunOlduguYil}</td>
              <td>{cv.calistigiFirma}</td>
              <td>{cv.calistigiSektor}</td>
              <td>{cv.gorevi}</td>
              <td>{cv.bildigiIkinciYabanciDil}</td>
              <td>{cv.egitimTipi}</td>
              <td>{cv.email}</td>
              <td><a href="#">{cv.Ozgecmis}</a></td>
    
    </>
  )
}

export default Cv