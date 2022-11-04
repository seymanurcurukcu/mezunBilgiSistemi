import React,{useContext,useState} from 'react'
import {CvAramaContext} from '../../../Contexts/CvAramaContext';

function CvAra() {
    const {Cvfilter} = useContext(CvAramaContext);

    const [yeniCvAra,setYeniCvAra]=useState({
        askerlikDurumu:"",bolum:"",egitimTipi:"",bildigiIkinciYabanciDil:"",sehir:"",calistigiSektor:"",departmani:"",gorevi:"",ingilizceAnlama:"",ingilizceYazma:"",ingilizceKonusma:""
     
        });
      
    const onInputChange=(e)=>{
        setYeniCvAra({...yeniCvAra,[e.target.name]:e.target.value})
    }
    const {askerlikDurumu,bolum,egitimTipi,bildigiIkinciYabanciDil,sehir,calistigiSektor,departmani,gorevi,ingilizceAnlama,ingilizceYazma,ingilizceKonusma}=yeniCvAra;
          const handleSubmit = (e)=>{
            e.preventDefault();
            Cvfilter(askerlikDurumu,bolum,egitimTipi,bildigiIkinciYabanciDil,sehir,calistigiSektor,departmani,gorevi,ingilizceAnlama,ingilizceYazma,ingilizceKonusma)
            setYeniCvAra({ askerlikDurumu:"",bolum:"",egitimTipi:"",bildigiIkinciYabanciDil:"",sehir:"",calistigiSektor:"",departmani:"",gorevi:"",ingilizceAnlama:"",ingilizceYazma:"",ingilizceKonusma:""})
          }

  return (
    <>
      <form onSubmit={handleSubmit}>
         <div className='row'>
 
       
           <div className='col-md-3'>
              <label className="form-group form-label">
                <select name='askerlikDurumu'   
                className="form-control"
                value={askerlikDurumu}
                onChange={e=>onInputChange(e)}
                >
                  <option value="">Lütfen Birini Seçiniz</option>
                  <option value="Yaptı">Yaptı</option>
                  <option value="Yapmadı">Yapmadı</option>
                  <option value="Muaf">Muaf</option>
                  <option value="Tecilli">Tecilli</option>
                  <option value="Yabancı Uyruklu">Yabancı Uyruklu</option>
                </select>
                <span>Askerlik Durumu</span>
             </label>
           </div>
           <div className='col-md-3'>
          
           
      
              <label className="form-group form-label">
                <select  name='bolum' 
                className="form-control"
                value={bolum}
                 onChange={e=>onInputChange(e)}
                >
                  <option value="">Lütfen Birini Seçiniz</option>
                  <option value="Bilgisayar Mühendisliği">Bilgisayar Mühendisliği</option>
                  <option value="Yazılım Mühendisliği">Yazılım Mühendisliği</option>
               </select>
               <span>Bölümü</span>
              </label>
            </div>
            <div className='col-md-3'>
              <label className="form-group form-label">
                <select name='egitimTipi'  
                 className="form-control"
                 value={egitimTipi}
                 onChange={e=>onInputChange(e)}
                 >
                  <option value="">Lütfen Birini Seçiniz</option>
                  <option value="Doktora">Doktora</option>
                  <option value="Lisans">Lisans</option>
                  <option value="Ön Lisans">Ön Lisans</option>
                  <option value="Yüksek Lisans">Yüksek Lisans</option>
                </select>
                <span>Eğitim Tipi</span>
             </label>
            </div>
            <div className='col-md-3'>
              <label className="form-group form-label">
                <select 
                name='bildigiIkinciYabanciDil'  
                className="form-control"
                value={bildigiIkinciYabanciDil}
                onChange={e=>onInputChange(e)}
                >
                  <option value="">Lütfen Birini Seçiniz</option>
                  <option value="Almanca">Almanca</option>
                  <option value="İtalyanca">İtalyanca</option>
                  <option value="İspanyolca">İspanyolca</option>
                  <option value="Çince">Çince</option>
                  <option value="Japonca">Japonca</option>
                  <option value="Fransızca">Fransızca</option>
                </select>
                <span>Bildiği İkinci Yabancı Dil</span>
              </label>
            </div>
            <div className='col-md-3'>
              <label className="form-group form-label">
                <select 
                name='sehir'  
                className="form-control"
                value={sehir}
                onChange={e=>onInputChange(e)}
                >
                  <option value="">Lütfen Birini Seçiniz</option>
                  <option value="Adana">Adana</option>
                  <option value="Ankara">Ankara</option>
                  <option value="Antalya">Antalya</option>
                  <option value="Bursa">Bursa</option>
                  <option value="Bolu">Bolu</option>
                  <option value="İzmir">İzmir</option>
                </select>
                <span>Şehir</span>
             </label>
            </div>
            <div className='col-md-3'>
              <label className="form-group form-label">
               <select name='calistigiSektor'  
               className="form-control"
               value={calistigiSektor}
               onChange={e=>onInputChange(e)}
               >
                  <option value="">Lütfen Birini Seçiniz</option>
                  <option value="Banka/Sigorta">Banka/Sigorta</option>
                  <option value="Bilişim">Bilişim</option>
                  <option value="Danışmanlık">Danışmanlık</option>
                  <option value="Eğitim">Eğitim</option>
                  <option value="Gıda">Gıda</option>
                  <option value="Güvenlik">Güvenlik</option>
               </select>
               <span>Sektör</span>
              </label>
            </div>
            <div className='col-md-3'>
              <label className="form-group form-label">
                <select name='departmani'  
                className="form-control"
                value={departmani}
                onChange={e=>onInputChange(e)}
                >
                  <option value="">Lütfen Birini Seçiniz</option>
                  <option value="Arge">Arge</option>
                  <option value="Bakım/Onarım">Bakım/Onarım</option>
                  <option value="Bilgi İşlem/Yazılım">Bilgi İşlem/Yazılım</option>
                  <option value="Eğitim">Eğitim</option>
                  <option value="Finans">Finans</option>
                  <option value="Hizmet">Hizmet</option>
                </select>
                <span>Departmanı</span>
              </label>
            </div>
             <div className='col-md-3'>
                 <label className="form-group form-label">
                 <select name='gorevi'  
                 className="form-control"
                 value={gorevi}
                onChange={e=>onInputChange(e)}
                 >
                     <option value="">Lütfen Birini Seçiniz</option>
                       <option value="Acente Eleman">Acente Eleman</option>
                       <option value="Acente Müdür Yardımcısı">Acente Müdür Yardımcısı</option>
                       <option value="Acente Yetkili Yardımcısı">Acente Yetkili Yardımcısı</option>
                       <option value="Acil Yardım Personeli">Acil Yardım Personeli</option>
                     </select>
                     <span>Görevi</span>
                 </label>
                 </div>
                 <div className='col-md-4'>
                 <label className="form-group form-label">
                 <select name='ingilizceAnlama'  
                 className="form-control"
                 value={ingilizceAnlama}
                 onChange={e=>onInputChange(e)}
                 >
                     <option value="">Lütfen Birini Seçiniz</option>
                       <option value="Az">Az</option>
                       <option value="Orta">Orta</option>
                       <option value="İyi">İyi</option>
                       <option value="İleri">İleri</option>
                     </select>
                     <span>İngilizce Seviyesi-Anlama</span>
                 </label>
                 </div>
                 <div className='col-md-4'>
                 <label className="form-group form-label">
                 <select name='ingilizceYazma'  
                 className="form-control"
                 value={ingilizceYazma}
                 onChange={e=>onInputChange(e)}>
                      <option value="">Lütfen Birini Seçiniz</option>
                       <option value="Az">Az</option>
                       <option value="Orta">Orta</option>
                       <option value="İyi">İyi</option>
                       <option value="İleri">İleri</option>
                     </select>
                     <span>İngilizce Seviyesi-Yazma</span>
                 </label>
                 </div>
                 <div className='col-md-4'>
                 <label className="form-group form-label">
                 <select name='ingilizceKonusma'  
                 className="form-control"
                 value={ingilizceKonusma}
                 onChange={e=>onInputChange(e)}
                 >
                 <option value="">Lütfen Birini Seçiniz</option>
                       <option value="Az">Az</option>
                       <option value="Orta">Orta</option>
                       <option value="İyi">İyi</option>
                       <option value="İleri">İleri</option>
                     </select>
                     <span>İngilizce Seviyesi-Konuşma</span>
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

export default CvAra
