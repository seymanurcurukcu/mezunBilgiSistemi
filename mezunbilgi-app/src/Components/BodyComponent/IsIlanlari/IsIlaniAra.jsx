import React,{useState} from "react";
import { IsIlanlariContext } from "../../../Contexts/IsIlanlariContext";
import { useContext } from "react";
const IsIlaniAra=()=>{
   const {filterList}=useContext(IsIlanlariContext);

   const [yeniIsIlaniAra,setYeniIsIlaniAra]=useState({
   firmaAdi:"",arananPozisyon:"",pozisyonTipi:"",durum:"",email:"",sonYayinTarihi:""
 
    });
  
const onInputChange=(e)=>{
    setYeniIsIlaniAra({...yeniIsIlaniAra,[e.target.name]:e.target.value})
}
const {firmaAdi,arananPozisyon,pozisyonTipi,durum,email,sonYayinTarihi}=yeniIsIlaniAra;
      const handleSubmit = (e)=>{
        e.preventDefault();
        filterList(firmaAdi,arananPozisyon,pozisyonTipi,durum,email,sonYayinTarihi)
        setYeniIsIlaniAra({firmaAdi:"",arananPozisyon:"",pozisyonTipi:"",durum:"",email:"",sonYayinTarihi:""})
      }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className='col-md-4'>
                  <label className="form-group form-label">
                      <select name='firmaAdi'   
                      className="form-control"
                      value={firmaAdi}
                      onChange={e=>onInputChange(e)}
                      >
                        <option value=""></option>
                        <option value="Kent Kart Yazilim">Kent Kart Yazılım</option>
                        <option value="Dogus Yazilim">Dogus Yazilim</option>
                        <option value="Logo Yazilim">Logo Yazilim</option>
                        <option value="Siskon Yazilim">Siskon Yazilim</option>
                      </select>

                      <span>Firma Adı</span>
            
                  </label>
                  </div>
                  <div className='col-md-4'>
                  <label className="form-group form-label">
                      <select name='arananPozisyon'   
                      className="form-control" 
                      value={arananPozisyon}
                      onChange={e=>onInputChange(e)}
                      >
                      <option value=""></option>
                        <option value="Bilgisayar Mühendisi">Bilgisayar Mühendisi</option>
                        <option value="Yazilim Mühendisi">Yazilim Mühendisi</option>
                      </select>

                      <span>Aranan Pozisyon</span>
                  
                  </label>
                  </div>
                  <div className='col-md-4'>
                  <label className="form-group form-label">
                      <select name='pozisyonTipi'   
                      className="form-control"
                      value={pozisyonTipi}
                      onChange={e=>onInputChange(e)}
                      >
                      <option value=""></option>
                        <option value="Tam Zamanli">Tam Zamanli</option>
                        <option value="Yarı Zamanli">Yarı Zamanli</option>
                      </select>

                      <span>Pozisyon Tipi</span>
            
                  </label>
                  </div>
                  <div className='col-md-4'>
                  <label className="form-group form-label">
                  <select name='durum'  
                  className="form-control"
                  value={durum}
                  onChange={e=>onInputChange(e)}
                  >
                      <option value=""></option>
                        <option value="Aktif">Aktif</option>
                        <option value="Pasif">Pasif</option>
                      </select>
                   
                      <span>İlan Durumu</span>
      
                  </label>
                  </div>
              <div className='col-md-4'>
                  <label className="form-group form-label">
                      <input type="mail" 
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={e=>onInputChange(e)}
                      
                      />
                      <span>E-Mail</span>
                   
                  </label>
              </div>
              <div className='col-md-4'>
                  <label className="form-group form-label">
                      <input
                       type="text" 
                       name='sonYayinTarihi' 
                       className="form-control"
                       value={sonYayinTarihi}
                       onChange={e=>onInputChange(e)}
                       />
                      <span>Son Yayın Tarihi</span>
                     
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
export default IsIlaniAra;