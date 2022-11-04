import React,{useContext} from 'react';
import {SorularContext} from '../../../../Contexts/SorularContext';
function SoruSil({theSoru2,handleClose2}) {
    const {SoruSil}=useContext(SorularContext);
    const soru=theSoru2;
  return (
    <>
    <form className="modal-content">
    <div className="Sil">
    
      <p>Silmek istediğinize emin misiniz?</p>

      <div className="clearfix">
        <button onClick={handleClose2} type="button" className="cancelbtn">Cancel</button>
        <button onClick={()=>SoruSil(soru.id)} type="button" className="deletebtn">Delete</button>
      </div>
    </div>
  </form>
    </>
  )
}

export default SoruSil