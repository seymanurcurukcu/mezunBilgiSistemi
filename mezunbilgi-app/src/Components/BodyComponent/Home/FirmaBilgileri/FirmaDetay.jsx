import React from 'react'
import logo from '../../../../logo/SİSKON.jpg'
function FirmaDetay({theFirma}) {
    const firma=theFirma;
    console.log(firma)
    console.log(firma.firmaAdi)
  return (
    <>
    <div className="card">
           <div className="card-body">
  
               <div className="d-flex align-items-start">
                   <img src={logo} className="rounded-circle avatar-lg img-thumbnail" alt="profile-image"/>
                   <div className="w-100 ms-3">
                         <h4 className="my-0">{firma.firmaAdi}</h4>
                          <p className="text-muted">{firma.firmaWebAdresi}</p>
                     
                     
                     </div>
               </div>

               <div className="mt-3">
                   <h4 className="font-13 text-uppercase">Firma Kısa Tanıtımı:</h4>
                   <p className="text-muted font-13 mb-3">
                   {firma.firmaKisaTanitimi}
                   </p>
                   <p className="text-muted mb-2 font-13"><strong>Adres :</strong> <span className="ms-2">{firma.firmaAdresi}</span></p>
               
                   <p className="text-muted mb-2 font-13"><strong>Telefon:</strong><span className="ms-2">{firma.firmaTelefon}</span></p>
                   <p className="text-muted mb-2 font-13"><strong>Faaliyet Alanı:</strong> <span className="ms-2">{firma.faliyetAlani}</span></p>
                   <p className="text-muted mb-2 font-13"><strong>İrtibat Kişisi:</strong> <span className="ms-2">{firma.irtibatKisisi}</span></p>
                   <p className="text-muted mb-2 font-13"><strong>İrtibat Kişisi Görevi:</strong> <span className="ms-2">{firma.irtibatKisisiGorevi}</span></p>
                   <p className="text-muted mb-2 font-13"><strong>İrtibat Kişisi Telefon:</strong> <span className="ms-2">{firma.irtibatKisisiTelefon}</span></p>
                   <p className="text-muted mb-2 font-13"><strong>İrtibat Kişisi E posta:</strong> <span className="ms-2">{firma.irtibatKisisiEposta}</span></p>
               
                 
               </div>                                    

          
           </div>      
                             
       </div>
</>
  )
}

export default FirmaDetay