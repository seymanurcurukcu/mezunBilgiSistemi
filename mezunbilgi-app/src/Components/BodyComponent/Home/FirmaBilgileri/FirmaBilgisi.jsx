import React,{useState,useEffect} from 'react';
import { Button,Modal } from "react-bootstrap";
import FirmaDetay from "./FirmaDetay";
import FirmaGuncelle from "./FirmaGuncelle";
import "./FirmaBilgisi.css"
function FirmaBilgisi({Firma}) {
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
  
    const [show2,setShow2]=useState(false);
    const handleClose2=()=>setShow2(false);
    const handleShow2=()=>setShow2(true);
    useEffect(()=>{
      handleClose2();
      },[Firma])
  return (
     <>
                      <div className="d-flex align-items-start">
                      <img src={Firma.firmaLogo} className="rounded-circle avatar-lg img-thumbnail" alt="profile-image"/>
                      <div className="w-100 ms-3">
                      
                        
                          <h4 className="my-0">{Firma.firmaAdi}</h4>
                          <p className="text-muted">{Firma.firmaWebAdresi}</p>
                        </div>
                  </div>

                  <div className="mt-3">
                      <h4 className="font-13 text-uppercase">Firma Tanıtımı:</h4>
                      <p className="text-muted font-13 mb-3">
                      {Firma.firmaKisaTanitimi}
                      </p>
                      <p className="text-muted mb-2 font-13"><strong>Adresi :</strong> <span className="ms-2">{Firma.firmaAdresi}</span></p>
                  
                      <p className="text-muted mb-2 font-13"><strong>Telefon :</strong><span className="ms-2">{Firma.firmaTelefon}</span></p>
                  
                      <p className="text-muted mb-1 font-13"><strong>Faliyet Alanı :</strong> <span className="ms-2">{Firma.faliyetAlani}</span></p>
                  </div>                                    

                    <div className="col-sm-9" style={{marginTop:"10px"}}>
                    <Button onClick={handleShow} className="btn btn-secondary btn-sm table-button" data-toggle="modal"><span>Detay</span></Button>
                    <Button onClick={handleShow2} className="btn btn-secondary btn-sm table-button" data-toggle="modal"><span>Güncelle</span></Button>
                
                </div>    
                 <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
              <Modal.Header className="modal-header" closeButton>
                  <Modal.Title>
                     Firma Detay
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FirmaDetay theFirma={Firma}/>
              </Modal.Body>
   
                  </Modal>

                  <Modal show={show2} onHide={handleClose2} size="xl" aria-labelledby="contained-modal-title-vcenter" className='firmaBilgileriniDuzenle' centered style={{width: "1090px", height: "600px"}}>
              <Modal.Header className="modalHeaderGuncelle" closeButton style={{height:"40px"}}>
                  <Modal.Title>
                     Firma Bilgilerini Düzenle
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{marginTop:"-25px"}}>
                <FirmaGuncelle theFirma2={Firma}/>
              </Modal.Body>
   
                  </Modal>  
                 </>   
  )
}

export default FirmaBilgisi