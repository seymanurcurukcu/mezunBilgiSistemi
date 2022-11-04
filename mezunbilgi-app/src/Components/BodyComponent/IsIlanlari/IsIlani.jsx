import React,{useState,useEffect} from "react";


import { Modal } from "react-bootstrap";
import IsIlaniDuzenle from "./IsIlaniDuzenle";
import IsIlaniDetay from "./IsIlaniDetay";
import IsIlaniSil from "./IsIlaniSil";
const IsIlani=({isilani})=>{
     

  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  const [show2,setShow2]=useState(false);
  const handleClose2=()=>setShow2(false);
  const handleShow2=()=>setShow2(true);

  const [show3,setShow3]=useState(false);
  const handleClose3=()=>setShow3(false);
  const handleShow3=()=>setShow3(true);
  useEffect(()=>{
    handleClose();
    },[isilani])

    return(
        <>
        
                <td>1</td>
                <td>{isilani.firmaAdi}</td>
                <td>{isilani.arananPozisyon}</td>
                <td>{isilani.pozisyonTipi}</td>
                <td>{isilani.email}</td>
                <td>{isilani.sonYayinTarihi}</td>
                <td>{isilani.durum}</td>
        
                <td>
                <button  onClick={handleShow2} className="btn text-view btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="View">&#xE417;</i></button>
                   <button  onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                    <button onClick={handleShow3} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                  </td>
                  <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"90px",height:"500px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        İŞ İLANI DÜZENLE
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <IsIlaniDuzenle theIsIlani={isilani}/>
                    </Modal.Body>
      
                </Modal>

                <Modal show={show2} onHide={handleClose2} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"70px",height:"570px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        İŞ İLANI DETAY
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <IsIlaniDetay theIsIlani2={isilani}/>
                    </Modal.Body>
      
                </Modal>
                <Modal show={show3} onHide={handleClose3} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        İŞ İLANI SİL
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <IsIlaniSil theIsIlani3={isilani} handleClose3={handleClose3}/>
                    </Modal.Body>
      
                </Modal>
        
      </>
    )
}
export default IsIlani;

