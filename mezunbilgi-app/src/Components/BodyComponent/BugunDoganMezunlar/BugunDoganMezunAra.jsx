import React,{useContext,useState} from 'react'
import { BugunDoganMezunlarContext } from '../../../Contexts/BugunDoganMezunlarContext';
function BugunDoganMezunAra() {
  const {MezunFilter}=useContext(BugunDoganMezunlarContext);

   const [yeniMezunAra,setYeniMezunAra]=useState({
    fakulte:"",bolum:"",mezunAdiSoyadi:"",email:"",telefonNo:""
 
    });
  
const onInputChange=(e)=>{
  setYeniMezunAra({...yeniMezunAra,[e.target.name]:e.target.value})
}
const {fakulte,bolum,mezunAdiSoyadi,email,telefonNo}=yeniMezunAra;
      const handleSubmit = (e)=>{
        e.preventDefault();
        MezunFilter(fakulte,bolum,mezunAdiSoyadi,email,telefonNo)
        setYeniMezunAra({fakulte:"",bolum:"",mezunAdiSoyadi:"",email:"",telefonNo:""})
      }


  
  return (
    <>
    
 
        <form onSubmit={handleSubmit}>
          <div className='row'>
          <div className='col-md-6'>
                    <label className="form-group form-label">
                        <select name='fakulte'   
                        className="form-control"
                        value={fakulte}
                        onChange={e=>onInputChange(e)}
                        >
                           <option value="">Lütfen Birini Seçiniz</option>
                          <option value="Mühendislik Fakültesi">Mühendislik Fakültesi</option>
                          <option value="Fen Edebiyat Fakültesi">Fen Edebiyat Fakültesi</option>
                        </select>

                        <span>Fakülte</span>
                  
                    </label>
                    </div>
                    <div className='col-md-6'>
                    <label className="form-group form-label">
                        <select name='bolum'   
                        className="form-control"
                        value={bolum}
                        onChange={e=>onInputChange(e)}
                        >
                        <option value="">Lütfen Birini Seçiniz</option>
                          <option value="Bilgisayar Mühendisliği">Bilgisayar Mühendisliği</option>
                          <option value="yazılım Mühendisliği">yazılım Mühendisliği</option>
                          <option value="endüstri Mühendisliği">endüstri Mühendisliği</option>
                        </select>

                        <span>Bölüm</span>
                   
                    </label>
                    </div>
                <div className='col-md-4'>
                    <label className="form-group form-label">
                        <input type="text" 
                          name='mezunAdiSoyadi'   
                          className="form-control" 
                          value={mezunAdiSoyadi}
                          onChange={e=>onInputChange(e)}
                        
                         />
                        <span>Öğrenci Adı - Soyadı</span>
          
                    </label>
                </div>
                <div className='col-md-4'>
                    <label className="form-group form-label">
                        <input type="email" 
                        name='email'   
                        className="form-control"
                        value={email}
                        onChange={e=>onInputChange(e)}
                        />
                        <span>E-mail</span>
                 
                    </label>
                    </div>
                    <div className='col-md-4'>
                    <label className="form-group form-label">
                        <input type="phone" 
                        name='telefonNo'   
                        className="form-control"
                        value={telefonNo}
                        onChange={e=>onInputChange(e)}
                        />
                        <span>Telefon No</span>
        
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

export default BugunDoganMezunAra