
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { HaberlerContext } from "../../../Contexts/HaberlerContext";
import { useContext } from "react";
const HaberEkle=()=>{
    const {HaberEkle} =useContext(HaberlerContext);
  
    const [yeniHaberEkle,setYeniHaberEkle]=useState({
        haberBasligi:"",tarih:"",gonderen:"",anasayfa:"",durum:""
    });
    const {haberBasligi,tarih,gonderen,anasayfa,durum}=yeniHaberEkle;
    const onInputChange=(e)=>{
        setYeniHaberEkle({...yeniHaberEkle,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        HaberEkle(haberBasligi,tarih,gonderen,anasayfa,durum)
    }
     return(
      <Form onSubmit={handleSubmit}>
           <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Haber Başlığı"
                name="haberBasligi"
                value={haberBasligi}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                 type="date"
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
                placeholder="Gönderen"
                name="gonderen"
                value={gonderen}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            
                <Form.Control
                placeholder="Anasayfa"
                type="text"
                name="anasayfa"
                value={anasayfa}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>

            <Form.Group style={{marginTop:"10px"}}>
                
                <Form.Control
                placeholder="Durum"
                name="durum"
                value={durum}
                onChange={e=>onInputChange(e)}
                type="text"
                required 
                />
            </Form.Group>
          
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>Haber Ekle</Button>
      </Form>
     )
}

export default HaberEkle;