import React, { useState,useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { MezunlarContext } from "../../../Contexts/MezunlarContext";

function MezunDuzenle({theMezun}) {
    const {MezunDuzenle} =useContext(MezunlarContext);
    const mezun=theMezun;
    const id=mezun.id;
    const [isim,setIsim]=useState(mezun.isim);
    const [soyIsim,setSoyIsim]=useState(mezun.soyIsim);
    const [tarih,setTarih]=useState(mezun.tarih);
    const [bolum,setBolum]=useState(mezun.bolum);
    const [kisaAciklama,setKisaAciklama]=useState(mezun.kisaAciklama);
    const [aciklama,setAciklama]=useState(mezun.aciklama);
    const mezunDuzenle={id,isim,soyIsim,tarih,bolum,kisaAciklama,aciklama};
    const handleSubmit = (e)=>{
      e.preventDefault();
      MezunDuzenle(id,mezunDuzenle);
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group style={{marginTop:"10px"}}>
         <span style={{color:"#6e6d6d"}}>İsim:</span>
             <Form.Control
             type="text"
             name="isim"
             value={isim}
             onChange={(e)=>setIsim(e.target.value)}
             required 
             />
         </Form.Group>
         <Form.Group style={{marginTop:"10px"}}>
         <span style={{color:"#6e6d6d"}}>Soyisim:</span>
             <Form.Control
             type="text"
             name="soyIsim"
             value={soyIsim}
             onChange={(e)=>setSoyIsim(e.target.value)}
             required 
             />
         </Form.Group>
         <Form.Group style={{marginTop:"10px"}}>
         <span style={{color:"#6e6d6d"}}>Tarih:</span>
             <Form.Control
             type="text"
             name="tarih"
             value={tarih}
             onChange={(e)=>setTarih(e.target.value)}
             required 
             />
         </Form.Group>
         <Form.Group style={{marginTop:"10px"}}>
         <span style={{color:"#6e6d6d"}}>Bölüm:</span>
             <Form.Control
             type="text"
             name="bolum"
             value={bolum}
             onChange={(e)=>setBolum(e.target.value)}
             required 
             />
         </Form.Group>
         <Form.Group style={{marginTop:"10px"}}>
         <span style={{color:"#6e6d6d"}}>Kısa Açıklama:</span>
             <Form.Control
              as="textarea"
             name="kisaAciklama"
             value={kisaAciklama}
             onChange={(e)=>setKisaAciklama(e.target.value)}
             rows={5} 
             required 
             />
         </Form.Group>
         <Form.Group style={{marginTop:"10px"}}>
         <span style={{color:"#6e6d6d"}}>Açıklama:</span>
             <Form.Control
              as="textarea"
             name="aciklama"
             value={aciklama}
             onChange={(e)=>setAciklama(e.target.value)}
             rows={5} 
             required 
             />
         </Form.Group>
        
       
      
      <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Mezun Düzenle</Button>
   </Form>
  )
}

export default MezunDuzenle