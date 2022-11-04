
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { SorularContext } from "../../../../Contexts/SorularContext";
import { useContext } from "react";
const SoruEkle=()=>{
     const {SoruEkle} =useContext(SorularContext);
     const [yeniSoruEkle,setYeniSoruEkle]=useState({
          soruBasligi:"",kategoriler:""
      });
      const {soruBasligi,kategoriler}=yeniSoruEkle;
      const onInputChange=(e)=>{
          setYeniSoruEkle({...yeniSoruEkle,[e.target.name]:e.target.value})
      }
      const handleSubmit=(e)=>{
          e.preventDefault();
          SoruEkle(soruBasligi,kategoriler);
      }
     return(
      <Form onSubmit={handleSubmit}>
         
           <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Soru"
                name="soruBasligi"
                value={soruBasligi}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Kategoriler"
                name="kategoriler"
                value={kategoriler}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
         
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Soru Ekle</Button>
      </Form>
     )
}

export default SoruEkle;