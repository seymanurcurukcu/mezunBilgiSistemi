import React from 'react'
import avatar from '../../../logo/SİSKON.jpg'
function IsIlaniDetay({theIsIlani2}) {
    const isilani=theIsIlani2;
  return (
    <>
         <div className="card">
                <div className="card-body">
       
                    <div className="d-flex align-items-start">
                        <img src={avatar} className="rounded-circle avatar-lg img-thumbnail" alt="profile-image"/>
                        <div className="w-100 ms-3">
                            <h4 style={{marginTop:'20px'}}>{isilani.firmaAdi}</h4>
                          
                          </div>
                    </div>

                    <div className="mt-3">
                        <h4 className="font-13 text-uppercase">Firma Kısa Tanıtımı:</h4>
                        <p className="text-muted font-13 mb-3">
                        {isilani.firmaKisaTanitimi}
                        </p>
                        <p className="text-muted mb-2 font-13"><strong>Aranan Pozisyon :</strong> <span className="ms-2">{isilani.arananPozisyon}</span></p>
                    
                        <p className="text-muted mb-2 font-13"><strong>İlan Yeri :</strong><span className="ms-2">{isilani.ilanYeri}</span></p>
                    
                        <p className="text-muted mb-2 font-13"><strong>Pozisyon Tipi :</strong> <span className="ms-2">{isilani.pozisyonTipi}</span></p>
                    
                        <p className="text-muted mb-1 font-13"><strong>İlanın Tipi :</strong> <span className="ms-2">{isilani.ilanTipi}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>Başvuru İçin Mail Adresi :</strong> <span className="ms-2">{isilani.email}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>Firma İletişim Bilgileri :</strong> <span className="ms-2">{isilani.firmaIletisimBilgileri}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>Anahtar Kelime :</strong> <span className="ms-2">{isilani.anahtarKelimeler}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>İlanın Başlama Tarihi :</strong> <span className="ms-2">{isilani.IlaninBaslamaTarihi}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>İlanın Son Yayın Tarihi :</strong> <span className="ms-2">{isilani.sonYayinTarihi}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>İlan Referans No :</strong> <span className="ms-2">{isilani.ilanReferansNo}</span></p>
                        <p className="text-muted mb-1 font-13"><strong>Durum :</strong> <span className="ms-2">{isilani.durum}</span></p>
                    </div>                                    

               
                </div>      
                                  
            </div>
    </>
  )
}

export default IsIlaniDetay