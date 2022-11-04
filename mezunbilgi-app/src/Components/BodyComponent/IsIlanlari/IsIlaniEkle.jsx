
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IsIlanlariContext } from "../../../Contexts/IsIlanlariContext";
import { useContext } from "react";
const IsIlaniEkle=()=>{
    const {IsIlaniEkle} =useContext(IsIlanlariContext);
    
    const [yeniIsIlaniEkle,setYeniIsIlaniEkle]=useState({
        firmaAdi:"",firmaKisaTanitimi:"",arananPozisyon:"",ilanYeri:"",pozisyonTipi:"",ilanTipi:"",email:"",firmaIletisimBilgileri:"",anahtarKelimeler:"",IlaninBaslamaTarihi:"",sonYayinTarihi:"",ilanReferansNo:"",durum:"Aktif"
     
    });
    const {firmaAdi,firmaKisaTanitimi,arananPozisyon,ilanYeri,pozisyonTipi,ilanTipi,email,firmaIletisimBilgileri,anahtarKelimeler,IlaninBaslamaTarihi,sonYayinTarihi,ilanReferansNo,durum}=yeniIsIlaniEkle;
    const onInputChange=(e)=>{
        setYeniIsIlaniEkle({...yeniIsIlaniEkle,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        IsIlaniEkle(firmaAdi,firmaKisaTanitimi,arananPozisyon,ilanYeri,pozisyonTipi,ilanTipi,email,firmaIletisimBilgileri,anahtarKelimeler,IlaninBaslamaTarihi,sonYayinTarihi,ilanReferansNo,durum)
    }
     return(
      <Form onSubmit={handleSubmit}>
           <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Firma Adi"
                name="firmaAdi"
                value={firmaAdi}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                    as="textarea"
              
                placeholder="Firma Kısa Tanıtım"
                name="firmaKisaTanitimi"
                value={firmaKisaTanitimi}
                
                onChange={e=>onInputChange(e)}
                required 
                rows={5} 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Aranan Pozisyon"
                name="arananPozisyon"
                value={arananPozisyon}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            
                <Form.Control
                placeholder="İlanın Yeri"
                type="text"
                name="ilanYeri"
                value={ilanYeri}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>

            <Form.Group style={{marginTop:"10px"}}>
                
                <Form.Control
                placeholder="Pozisyon Tipi"
                name="pozisyonTipi"
                value={pozisyonTipi}
                onChange={e=>onInputChange(e)}
                type="text"
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                
                type="text"
                placeholder="İlan Tipi"
                name="ilanTipi"
                value={ilanTipi}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="email"
                placeholder="Başvuru için e-mail"
                name="email"
                value={email}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Firma İletişim Bilgileri"
                name="firmaIletisimBilgileri"
                value={firmaIletisimBilgileri}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            
            <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="Anahtar Kelimeler"
                name="anahtarKelimeler"
                value={anahtarKelimeler}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            
            <Form.Group style={{marginTop:"10px"}}>
                <span>ilanın Başlama Tarihi:</span>
                <Form.Control
                type="date"
                name="IlaninBaslamaTarihi"
                value={IlaninBaslamaTarihi}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
                <span>ilanın Son Yayın Tarihi:</span>
                <Form.Control
                type="date"
                name="sonYayinTarihi"
                value={sonYayinTarihi}
                onChange={e=>onInputChange(e)}
                required 
                />
            </Form.Group>
      
     
         <Form.Group style={{marginTop:"10px"}}>
                <Form.Control
                type="text"
                placeholder="İlan Referans No"
                name="ilanReferansNo"
                value={ilanReferansNo}
                onChange={e=>onInputChange(e)}
                required 
                />
         </Form.Group>
         <Form.Group style={{marginTop:"10px"}}>
         <span>Logo Seç:</span>
                <Form.Control    
                type="file"
                />    
         </Form.Group>
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>İş İlanı Ekle</Button>
      </Form>
     )
}

export default IsIlaniEkle;