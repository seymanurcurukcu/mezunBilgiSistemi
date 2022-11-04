import React,{useContext} from 'react';


import { MezunlarContext } from "../../../Contexts/MezunlarContext";
function MezunSil({theMezun2,handleClose2}) {
    const {Mezunsil}=useContext(MezunlarContext);
    const mezun=theMezun2;
  return (
    <>
    <form className="modal-content">
    <div className="Sil">
    
      <p>Silmek istediğinize emin misiniz?</p>

      <div className="clearfix">
        <button onClick={handleClose2} type="button" className="cancelbtn">Cancel</button>
        <button onClick={()=>Mezunsil(mezun.id)} type="button" className="deletebtn">Delete</button>
      </div>
    </div>
  </form>
    </>
  )
}

export default MezunSil