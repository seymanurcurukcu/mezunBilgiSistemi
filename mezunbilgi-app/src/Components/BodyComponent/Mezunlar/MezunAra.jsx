import React,{useState} from "react";
import { MezunlarContext } from "../../../Contexts/MezunlarContext";
import { useContext } from "react";

function MezunAra() {

    const {Mezunfilter}=useContext(MezunlarContext);

    const [yeniMezunAra,setYeniMezunAra]=useState({
    isim:"",soyIsim:"",tarih:"",bolum:""
  
     });
   
 const onInputChange=(e)=>{
    setYeniMezunAra({...yeniMezunAra,[e.target.name]:e.target.value})
 }
 const {isim,soyIsim,tarih,bolum}=yeniMezunAra;
       const handleSubmit = (e)=>{
         e.preventDefault();
         Mezunfilter(isim,soyIsim,tarih,bolum)
         setYeniMezunAra({isim:"",soyIsim:"",tarih:"",bolum:""})
       }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='row'>

          <div className='col-md-6'>
              <label className="form-group form-label">
                  <input type="text" 
                  className="form-control"
                  name="isim"
                  value={isim}
                  onChange={e=>onInputChange(e)}
                  />
                  <span>İsim</span>
               
              </label>
          </div>
          <div className='col-md-6'>
              <label className="form-group form-label">
                  <input
                   type="text" 
                   name='soyIsim' 
                   className="form-control"
                   value={soyIsim}
                   onChange={e=>onInputChange(e)}
                   />
                  <span>Soyisim</span>
                 
              </label>
              </div>
              <div className='col-md-6'>
              <label className="form-group form-label">
                  <input
                   type="date" 
                   name='tarih' 
                   className="form-control"
                   value={tarih}
                   onChange={e=>onInputChange(e)}
                   />
                  <span>Tarih</span>
                 
              </label>
              </div>
              <div className='col-md-6'>
              <label className="form-group form-label">
                  <input
                   type="text" 
                   name='bolum' 
                   className="form-control"
                   value={bolum}
                   onChange={e=>onInputChange(e)}
                   />
                  <span>Bölüm</span>
                 
              </label>
              </div>
            
           
             
         
              <div className='col-md-12'>
                <div className='col-md-3' style={{float:'right'}} >
                    <button className='form-button'>Ara</button>
                </div>
              </div>
              </div>
      </form>


      </>
  )
}

export default MezunAra