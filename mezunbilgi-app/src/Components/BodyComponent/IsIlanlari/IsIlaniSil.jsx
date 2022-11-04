import React,{useContext} from 'react'
import { IsIlanlariContext } from "../../../Contexts/IsIlanlariContext";
function IsIlaniSil({theIsIlani3,handleClose3}) {
    const {IsYeriSil}=useContext(IsIlanlariContext);
    const isilani=theIsIlani3;
  return (
    <>
    <form className="modal-content">
    <div className="Sil">
    
      <p>Silmek istediğinize emin misiniz?</p>

      <div className="clearfix">
        <button onClick={handleClose3} type="button" className="cancelbtn">Cancel</button>
        <button onClick={()=>IsYeriSil(isilani.id)} type="button" className="deletebtn">Delete</button>
      </div>
    </div>
  </form>
    </>
  )
}

export default IsIlaniSil