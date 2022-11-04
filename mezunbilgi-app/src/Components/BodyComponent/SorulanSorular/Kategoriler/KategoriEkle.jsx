
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { KategorilerContext } from "../../../../Contexts/KategorilerContext";
import { useContext } from "react";
const KategoriEkle=()=>{
     const {KategoriEkle} =useContext(KategorilerContext);
     const [yeniKategoriEkle,setYeniKategoriEkle]=useState({
          kategoriTurkce:"",kategoriIngilizce:""
      });
      const {kategoriTurkce,kategoriIngilizce}=yeniKategoriEkle;
      const onInputChange=(e)=>{
          setYeniKategoriEkle({...yeniKategoriEkle,[e.target.name]:e.target.value})
      }
      const handleSubmit=(e)=>{
          e.preventDefault();
          KategoriEkle(kategoriTurkce,kategoriIngilizce);
      }
     return(
      <Form onSubmit={handleSubmit}>
          
        
           <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Kategori Türkçe"
                name="kategoriTurkce"
                value={kategoriTurkce}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Kategori İngilizce"
                name="kategoriIngilizce"
                value={kategoriIngilizce}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
         
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Kategori Ekle</Button>
      </Form>
     )
}

export default KategoriEkle;