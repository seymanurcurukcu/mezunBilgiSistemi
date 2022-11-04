import React from 'react'

function FirmaRapor({firmaraporu}) {
  return (
    <>
     
    <td>1</td>
    <td>{firmaraporu.sirketAdi}</td>
    <td>{firmaraporu.faaliyetAlani}</td>
    <td>{firmaraporu.irtibatKisisi}</td>
    <td>{firmaraporu.telefon}</td>
    <td>{firmaraporu.email}</td>
    <td>{firmaraporu.girisSayfasi}</td>
    <td>{firmaraporu.cvAramaSayisi}</td>
    <td>{firmaraporu.sonGuncellemeTarihi}</td>

    
</>
  )
}

export default FirmaRapor