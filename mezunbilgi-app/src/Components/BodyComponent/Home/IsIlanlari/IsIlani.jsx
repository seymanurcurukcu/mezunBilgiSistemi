import React from 'react'

function IsIlani({isilani}) {
  return (
    <>
           <td>1</td>
            <td>{isilani.firmaAdi}</td>
            <td>{isilani.arananPozisyon}</td>
            <td>{isilani.pozisyonTipi}</td>
            <td>{isilani.email}</td>
            <td>{isilani.sonYayinTarihi}</td>
            <td>{isilani.durum}</td>
     </>
  )
}

export default IsIlani