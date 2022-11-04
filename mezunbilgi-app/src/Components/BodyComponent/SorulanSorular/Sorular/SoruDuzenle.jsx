
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { SorularContext } from "../../../../Contexts/SorularContext";
import { useContext } from "react";
const SoruDuzenle=({theSoru})=>{
    const {SoruDuzenle} =useContext(SorularContext);
    const soru=theSoru;
    const id=soru.id;
    const [soruBasligi,setSoruBasligi]=useState(soru.soruBasligi);
    const [kategoriler,setKategoriler]=useState(soru.kategoriler);
 
  
    const soruduzenle={id,soruBasligi,kategoriler};
    const handleSubmit = (e)=>{
      e.preventDefault();
      SoruDuzenle(id,soruduzenle);
    }

     return(
      <Form onSubmit={handleSubmit}>
           <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
  
                name="soruBasligi"
                value={soruBasligi}
                onChange={(e)=>setSoruBasligi(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
          
                name="kategoriler"
                value={kategoriler}
                onChange={(e)=>setKategoriler(e.target.value)}
                required 
                />
            </Form.Group>
          
          
           
          
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Soru Düzenle</Button>
      </Form>
     )
}

export default SoruDuzenle;