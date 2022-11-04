import React, { useState,useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { HaberlerContext } from "../../../Contexts/HaberlerContext";
function HaberDuzenle({theHaber}) {
    const {HaberDuzenle} =useContext(HaberlerContext);
    const haber=theHaber;
    const id=haber.id;
    const [haberBasligi,setHaberBasligi]=useState(haber.haberBasligi);
    const [tarih,setTarih]=useState(haber.tarih);
    const [gonderen,setGonderen]=useState(haber.gonderen);
    const [anasayfa,setAnasayfa]=useState(haber.anasayfa);
    const [durum,setDurum]=useState(haber.durum);
    const haberDuzenle={id,haberBasligi,tarih,gonderen,anasayfa,durum};
    const handleSubmit = (e)=>{
      e.preventDefault();
      HaberDuzenle(id,haberDuzenle);
    }
  return (
    <>

         <Form onSubmit={handleSubmit}>
           <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Haber Başlığı:</span>
                <Form.Control
                type="text"
  
                name="haberBasligi"
                value={haberBasligi}
                onChange={(e)=>setHaberBasligi(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Tarih:</span>
                <Form.Control
             
                name="tarih"
                value={tarih}
                onChange={(e)=>setTarih(e.target.value)}
           
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Gönderen:</span>
                <Form.Control
                type="text"
                name="gonderen"
                value={gonderen}
                onChange={(e)=>setGonderen(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Anasayfa:</span>
                <Form.Control
                type="text"
                name="anasayfa"
                value={anasayfa}
                onChange={(e)=>setAnasayfa(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Durum:</span>
                <Form.Control
                type="text"
                name="durum"
                value={durum}
                onChange={(e)=>setDurum(e.target.value)}
                required 
                />
            </Form.Group>
           
        
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Haber Düzenle</Button>
      </Form>
    
    </>
  )
}

export default HaberDuzenle