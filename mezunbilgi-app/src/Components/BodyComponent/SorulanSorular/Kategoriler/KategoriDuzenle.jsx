
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { KategorilerContext } from "../../../../Contexts/KategorilerContext";
import { useContext } from "react";
const KategoriDuzenle=({theKategori})=>{
    const {KategoriDuzenle} =useContext(KategorilerContext);
    const kategori=theKategori;
    const id=kategori.id;
    const [kategoriTurkce,setKategoriTurkce]=useState(kategori.kategoriTurkce);
    const [kategoriIngilizce,setKategoriIngilizce]=useState(kategori.kategoriIngilizce);
 
  
    const kategoriduzenle={id,kategoriTurkce,kategoriIngilizce};
    const handleSubmit = (e)=>{
      e.preventDefault();
      KategoriDuzenle(id,kategoriduzenle);
    }

     return(
      <Form onSubmit={handleSubmit}>
           <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
  
                name="kategoriTurkce"
                value={kategoriTurkce}
                onChange={(e)=>setKategoriTurkce(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
          
                name="kategoriIngilizce"
                value={kategoriIngilizce}
                onChange={(e)=>setKategoriIngilizce(e.target.value)}
                required 
                />
            </Form.Group>
          
          
           
          
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Kategori Düzenle</Button>
      </Form>
     )
}

export default KategoriDuzenle;