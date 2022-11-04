import React, { useState,useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { MezunlarContext } from "../../../Contexts/MezunlarContext";

function MezunEkle() {
    const {MezunEkle} =useContext(MezunlarContext);
    
    const [yeniMezunEkle,setYeniMezunEkle]=useState({
        isim:"",soyIsim:"",tarih:"",bolum:"",kisaAciklama:"",aciklama:""
     
    });
    const {isim,soyIsim,tarih,bolum,kisaAciklama,aciklama}=yeniMezunEkle;
    const onInputChange=(e)=>{
        setYeniMezunEkle({...yeniMezunEkle,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        MezunEkle(isim,soyIsim,tarih,bolum,kisaAciklama,aciklama)
    }
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group style={{marginTop:"10px"}}>
         <Form.Control
         type="text"
         placeholder="İsim"
         name="isim"
         value={isim}
         onChange={e=>onInputChange(e)}
         required 
         />
     </Form.Group>
     <Form.Group style={{marginTop:"10px"}}>
         <Form.Control
         type="text"
         placeholder="Soyisim"
         name="soyIsim"
         value={soyIsim}
         onChange={e=>onInputChange(e)}
         required 
         />
     </Form.Group>
     <Form.Group style={{marginTop:"10px"}}>
         <Form.Control
         type="text"
         placeholder="Tarih"
         name="tarih"
         value={tarih}
         onChange={e=>onInputChange(e)}
         required 
         />
     </Form.Group>
     <Form.Group style={{marginTop:"10px"}}>
         <Form.Control
         type="text"
         placeholder="Bölüm"
         name="bolum"
         value={bolum}
         onChange={e=>onInputChange(e)}
         required 
         />
     </Form.Group>
     <Form.Group style={{marginTop:"10px"}}>
         <Form.Control
             as="textarea" 
      
         placeholder="Kısa Açıklama"
         name="kisaAciklama"
         value={kisaAciklama}
         
         onChange={e=>onInputChange(e)}
         required 
         rows={5} 
         />
     </Form.Group>
     <Form.Group style={{marginTop:"10px"}}>
         <Form.Control
             as="textarea" 
      
         placeholder="Açıklama"
         name="aciklama"
         value={aciklama}
         
         onChange={e=>onInputChange(e)}
         required 
         rows={5} 
         />
     </Form.Group>
   
  <Form.Group style={{marginTop:"10px"}}>
  <span>Öğrenci Foto Seç:</span>
         <Form.Control    
         type="file"
         />    
  </Form.Group>
  <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Mezun Ekle</Button>
</Form>
  )
}

export default MezunEkle