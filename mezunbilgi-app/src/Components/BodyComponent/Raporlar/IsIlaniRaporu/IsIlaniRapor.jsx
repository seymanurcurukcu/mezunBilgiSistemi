import React from 'react'

function IsIlaniRapor({isilaniraporu}) {
  return (
    <>
     
    <td>1</td>
    <td>{isilaniraporu.sirketAdi}</td>
    <td>{isilaniraporu.arananPozisyon}</td>
    <td>{isilaniraporu.sehirUlke}</td>
    <td>{isilaniraporu.yariTamZamanli}</td>
    <td>{isilaniraporu.kacKezGoruntulendi}</td>
    <td>{isilaniraporu.isIlaniBaslangicTarihi}</td>
    <td>{isilaniraporu.isIlaniBitisTarihi}</td>


    
</>
  )
}

export default IsIlaniRapor