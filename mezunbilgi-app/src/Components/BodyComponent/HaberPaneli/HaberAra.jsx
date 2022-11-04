import React from 'react'
import { HaberlerContext } from "../../../Contexts/HaberlerContext";
import { useContext,useState } from "react";
function HaberAra() {
  const {Haberfilter}=useContext(HaberlerContext);

  const [yeniHaberAra,setYeniHaberAra]=useState({
    haberBasligi:"",tarih:"",gonderen:"",anasayfa:"",durum:""

   });

const onInputChange=(e)=>{
  setYeniHaberAra({...yeniHaberAra,[e.target.name]:e.target.value})
}
const {haberBasligi,tarih,gonderen,anasayfa,durum}=yeniHaberAra;
     const handleSubmit = (e)=>{
       e.preventDefault();
       Haberfilter(haberBasligi,tarih,gonderen,anasayfa,durum)
       setYeniHaberAra({haberBasligi:"",tarih:"",gonderen:"",anasayfa:"",durum:""})
     }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div className='col-md-4'>
              <label className="form-group form-label">
              <input type="text" 
                  className="form-control"
                  name="haberBasligi"
                  value={haberBasligi}
                  onChange={e=>onInputChange(e)}
                  />
                  <span>Haber Başlığı</span>

           
              </label>
              </div>
              <div className='col-md-4'>
              <label className="form-group form-label">
              <input type="date" 
                  className="form-control"
                  name="tarih"
                  value={tarih}
                  onChange={e=>onInputChange(e)}
                  />
                  <span>Tarih</span>

              
              </label>
              </div>
              <div className='col-md-4'>
              <label className="form-group form-label">
              <input type="text" 
                  className="form-control"
                  name="gonderen"
                  value={gonderen}
                  onChange={e=>onInputChange(e)}
                  />
                  <span>Gönderen</span>
        
              </label>
              </div>
              <div className='col-md-6'>
              <label className="form-group form-label">
              <select name='anasayfa'  
              className="form-control"
              value={anasayfa}
              onChange={e=>onInputChange(e)}
              >
                  <option value="">Lütfen Birini Seçiniz</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Pasif">Pasif</option>
                  </select>
               
                  <span>Anasayfa</span>
  
              </label>
              </div>
          <div className='col-md-6'>
              <label className="form-group form-label">
              <select name='durum'  
              className="form-control"
              value={durum}
              onChange={e=>onInputChange(e)}
              >
                  <option value="">Lütfen Birini Seçiniz</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Pasif">Pasif</option>
                  </select>
               
                  <span>Durum</span>
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

export default HaberAra
