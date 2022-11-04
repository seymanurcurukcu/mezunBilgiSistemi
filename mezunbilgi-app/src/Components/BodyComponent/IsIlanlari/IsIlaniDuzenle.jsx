
import React, { useState,useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { IsIlanlariContext } from "../../../Contexts/IsIlanlariContext";
const IsIlaniDuzenle=({theIsIlani})=>{
    const {IsYeriDuzenle} =useContext(IsIlanlariContext);
    
  const isilani=theIsIlani;
  const id=isilani.id;
  const [firmaAdi,setFirmaAdi]=useState(isilani.firmaAdi);
  const [firmaKisaTanitimi,setFirmaKisaTanitimi]=useState(isilani.firmaKisaTanitimi);
  const [arananPozisyon,setArananPozisyon]=useState(isilani.arananPozisyon);
  const [ilanYeri,setIlanYeri]=useState(isilani.ilanYeri);
  const [pozisyonTipi,setPozisyonTipi]=useState(isilani.pozisyonTipi);
  const [ilanTipi,setIlanTipi]=useState(isilani.ilanTipi);
  const [email,setEmail]=useState(isilani.email);
  const [firmaIletisimBilgileri,setFirmaIletisimBilgileri]=useState(isilani.firmaIletisimBilgileri);
  const [anahtarKelimeler,setAnahtarKelimeler]=useState(isilani.anahtarKelimeler);
  const [IlaninBaslamaTarihi,setIlaninBaslamaTarihi]=useState(isilani.IlaninBaslamaTarihi);
  const [sonYayinTarihi,setSonYayinTarihi]=useState(isilani.sonYayinTarihi);
  const [ilanReferansNo,setIlanReferansNo]=useState(isilani.ilanReferansNo);
  const [durum]=useState("Aktif");
  const isyeriDuzenle={id,firmaAdi,firmaKisaTanitimi,arananPozisyon,ilanYeri,pozisyonTipi,ilanTipi,email,firmaIletisimBilgileri,anahtarKelimeler,IlaninBaslamaTarihi,sonYayinTarihi,ilanReferansNo,durum};
  const handleSubmit = (e)=>{
    e.preventDefault();
    IsYeriDuzenle(id,isyeriDuzenle);
  }
     return(
      <Form onSubmit={handleSubmit}>
           <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Firma Adı:</span>
                <Form.Control
                type="text"
  
                name="firmaAdi"
                value={firmaAdi}
                onChange={(e)=>setFirmaAdi(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Firma Kısa Tanıtımı:</span>
                <Form.Control
                 as="textarea"
                name="firmaKisaTanitimi"
                value={firmaKisaTanitimi}
                onChange={(e)=>setFirmaKisaTanitimi(e.target.value)}
                rows={5} 
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Aranan Pozisyon:</span>
                <Form.Control
                type="text"
                name="arananPozisyon"
                value={arananPozisyon}
                onChange={(e)=>setArananPozisyon(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>İlan Yeri:</span>
                <Form.Control
                type="text"
                name="ilanYeri"
                value={ilanYeri}
                onChange={(e)=>setIlanYeri(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Pozisyon Tipi:</span>
                <Form.Control
                type="text"
                name="pozisyonTipi"
                value={pozisyonTipi}
                onChange={(e)=>setPozisyonTipi(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>İlan Tipi:</span>
                <Form.Control
                type="text"
                name="ilanTipi"
                value={ilanTipi}
                onChange={(e)=>setIlanTipi(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Başvuru İçin Mail Adresi:</span>
                <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Firma İletişim Bilgileri:</span>
                <Form.Control
                type="text"
                name="firmaIletisimBilgileri"
                value={firmaIletisimBilgileri}
                onChange={(e)=>setFirmaIletisimBilgileri(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>Anahtar Kelimeler:</span>
                <Form.Control
                type="text"
                name="anahtarKelimeler"
                value={anahtarKelimeler}
                onChange={(e)=>setAnahtarKelimeler(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>İlanın Başlama Tarihi:</span>
                <Form.Control
                type="text"
                name="IlaninBaslamaTarihi"
                value={IlaninBaslamaTarihi}
                onChange={(e)=>setIlaninBaslamaTarihi(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>İlanın Son Yayın Tarihi:</span>
                <Form.Control
                type="text"
                name="sonYayinTarihi"
                value={sonYayinTarihi}
                onChange={(e)=>setSonYayinTarihi(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span style={{color:"#6e6d6d"}}>İlan Referans No:</span>
                <Form.Control
                type="text"
                name="ilanReferansNo"
                value={ilanReferansNo}
                onChange={(e)=>setIlanReferansNo(e.target.value)}
                required 
                />
         </Form.Group>
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"130px"}}>İş İlanı Düzenle</Button>
      </Form>
     )
}

export default IsIlaniDuzenle;