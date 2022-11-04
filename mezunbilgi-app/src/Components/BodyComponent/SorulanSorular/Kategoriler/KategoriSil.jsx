import React,{useContext} from 'react';


import { KategorilerContext } from "../../../../Contexts/KategorilerContext";

function KategoriSil({theKategori2,handleClose2}) {
    const {KategoriSil}=useContext(KategorilerContext);
    const kategori=theKategori2;
  return (
    <>
    <form className="modal-content">
    <div className="Sil">
    
      <p>Silmek istediğinize emin misiniz?</p>

      <div className="clearfix">
        <button onClick={handleClose2} type="button" className="cancelbtn">Cancel</button>
        <button onClick={()=>KategoriSil(kategori.id)} type="button" className="deletebtn">Delete</button>
      </div>
    </div>
  </form>
    </>
  )
}

export default KategoriSil