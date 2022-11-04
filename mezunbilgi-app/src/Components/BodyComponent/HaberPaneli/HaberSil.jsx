import React,{useContext} from 'react'
import { HaberlerContext } from "../../../Contexts/HaberlerContext";

function HaberSil({theHaber2,handleClose2}) {
    const {HaberSil}=useContext(HaberlerContext);
    const haber=theHaber2;
  return (
    <>
    <form className="modal-content">
    <div className="Sil">
    
      <p>Silmek istediğinize emin misiniz?</p>

      <div className="clearfix">
        <button onClick={handleClose2} type="button" className="cancelbtn">Cancel</button>
        <button onClick={()=>HaberSil(haber.id)} type="button" className="deletebtn">Delete</button>
      </div>
    </div>
  </form>
    </>
  )
}

export default HaberSil