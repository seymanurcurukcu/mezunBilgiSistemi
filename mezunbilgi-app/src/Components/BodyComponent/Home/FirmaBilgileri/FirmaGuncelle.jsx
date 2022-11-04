import React,{ useContext,useState } from 'react'
import { FirmaBilgileriContext } from "../../../../Contexts/FirmaBilgileriContext";
import { Form, Button } from "react-bootstrap";
import logo from "../../../../logo/SİSKON.jpg"
function FirmaGuncelle({theFirma2}) {
  const {FirmaBilgileriniGuncelle} =useContext(FirmaBilgileriContext);
  const firma=theFirma2;
  const id=firma.id;
  const [firmaLogo]=useState(logo);
  const [firmaAdi,setFirmaAdi]=useState(firma.firmaAdi);
  const [firmaAdresi,setFirmaAdresi]=useState(firma.firmaAdresi);
  const [firmaTelefon,setFirmaTelefon]=useState(firma.firmaTelefon);
  const [firmaWebAdresi,setFirmaWebAdresi]=useState(firma.firmaWebAdresi);
  const [faliyetAlani,setFaliyetAlani]=useState(firma.faliyetAlani);
  const [firmaKisaTanitimi,setFirmaKisaTanitimi]=useState(firma.firmaKisaTanitimi);
  const [irtibatKisisi,setIrtibatKisisi]=useState(firma.irtibatKisisi);
  const [irtibatKisisiGorevi,setIrtibatKisisiGorevi]=useState(firma.irtibatKisisiGorevi);
  const [irtibatKisisiTelefon,setIrtibatKisisiTelefon]=useState(firma.irtibatKisisiTelefon);
  const [irtibatKisisiEposta,setIrtibatKisisiEposta]=useState(firma.irtibatKisisiEposta);
  const FirmaBilgileriDuzenle={id,firmaLogo,firmaAdi,firmaAdresi,firmaTelefon,firmaWebAdresi,faliyetAlani,firmaKisaTanitimi,irtibatKisisi,irtibatKisisiGorevi,irtibatKisisiTelefon,irtibatKisisiEposta};
  const handleSubmit = (e)=>{
    e.preventDefault();
    FirmaBilgileriniGuncelle(id,FirmaBilgileriDuzenle);
  }
  return (
    <Form onSubmit={handleSubmit}>
       <div className='row'>
          <div className='col-md-4'>
              <Form.Group style={{marginTop:"10px"}}>
                <span style={{color:"#6e6d6d"}}>Logo:</span>
                    <Form.Control
                    type="file"
                />
              </Form.Group>
          </div>
          <div className='col-md-4'>
                <Form.Group style={{marginTop:"10px"}}>
                   <span style={{color:"#6e6d6d"}}>Adı:</span>
                    <Form.Control
                    type="text"
                    name="firmaAdi"
                    value={firmaAdi}
                    onChange={(e)=>setFirmaAdi(e.target.value)}
                    required 
                    />
              </Form.Group>
              
                <Form.Group style={{marginTop:"10px"}}>
                    <span style={{color:"#6e6d6d"}}>Faaliyet Alanı:</span>
                    <Form.Control
                    type="text"
                    name="faliyetAlani"
                    value={faliyetAlani}
                    onChange={(e)=>setFaliyetAlani(e.target.value)}
                    required 
                    />
                </Form.Group>
            
               <Form.Group style={{marginTop:"10px"}}>
                   <span style={{color:"#6e6d6d"}}>İrtibat Kişisi:</span>
                    <Form.Control
                    type="text"
                    name="irtibatKisisi"
                    value={irtibatKisisi}
                    onChange={(e)=>setIrtibatKisisi(e.target.value)}
                    required 
                    />
                </Form.Group>
                <Form.Group style={{marginTop:"10px"}}>
                    <span style={{color:"#6e6d6d"}}>İrtibat Kişisi Görevi:</span>
                    <Form.Control
                    type="text"
                    name="irtibatKisisiGorevi"
                    value={irtibatKisisiGorevi}
                    onChange={(e)=>setIrtibatKisisiGorevi(e.target.value)}
                    required 
                    />
               </Form.Group>
               <Form.Group style={{marginTop:"10px"}}>
                   <span style={{color:"#6e6d6d"}}>Web Adresi:</span>
                    <Form.Control
                    type="text"
                    name="firmaWebAdresi"
                    value={firmaWebAdresi}
                    onChange={(e)=>setFirmaWebAdresi(e.target.value)}
                    required 
                    />
               </Form.Group>
         
          </div>
          <div className='col-md-4'>
          <Form.Group style={{marginTop:"10px"}}>
                  <span style={{color:"#6e6d6d"}}>Telefon:</span>
                    <Form.Control
                    type="phone"
                    name="firmaTelefon"
                    value={firmaTelefon}
                    onChange={(e)=>setFirmaTelefon(e.target.value)}
                    required 
                    />
             </Form.Group>
         

          
            
               <Form.Group style={{marginTop:"10px"}}>
                    <span style={{color:"#6e6d6d"}}>İrtibat Kişisi Telefonu:</span>
                    <Form.Control
                    type="phone"
                    name="irtibatKisisiTelefon"
                    value={irtibatKisisiTelefon}
                    onChange={(e)=>setIrtibatKisisiTelefon(e.target.value)}
                    required 
                    />
                </Form.Group>
                <Form.Group style={{marginTop:"10px"}}>
                     <span style={{color:"#6e6d6d"}}>İrtibat Kişisi E-posta:</span>
                     <Form.Control
                     type="email"
                     name="irtibatKisisiEposta"
                     value={irtibatKisisiEposta}
                     onChange={(e)=>setIrtibatKisisiEposta(e.target.value)}
                     required 
                        />
                </Form.Group>
                <Form.Group style={{marginTop:"10px"}}>
                  <span style={{color:"#6e6d6d"}}>Adres:</span>
                    <Form.Control
                    as="textarea"
                    rows={4} 
                    name="firmaAdresi"
                    value={firmaAdresi}
                    onChange={(e)=>setFirmaAdresi(e.target.value)}
                    required 
                    />
                </Form.Group>
             
          </div>
          <div className='col-md-12'>
            <Form.Group style={{marginTop:"10px"}}>
                <span style={{color:"#6e6d6d"}}>Kısa Tanıtımı:</span>
                <Form.Control
                as="textarea"
                rows={3} 
                name="firmaKisaTanitimi"
                value={firmaKisaTanitimi}
                onChange={(e)=>setFirmaKisaTanitimi(e.target.value)}
                required 
                />
            </Form.Group>
          </div>
       </div>
  <Button className='firmaBilgiGuncelleButon' variant="success" type="submit" block style={{marginTop:"10px", width:"200px"}}>Firma Bilgilerini Düzenle</Button>
</Form>
  )
}

export default FirmaGuncelle