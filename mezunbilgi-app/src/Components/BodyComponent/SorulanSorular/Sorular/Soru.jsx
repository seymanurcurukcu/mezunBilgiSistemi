import React,{useEffect,useState} from 'react';

import { Modal } from "react-bootstrap";
import SoruDuzenle from "./SoruDuzenle";
import SoruSil from "./SoruSil";
function Soru({soru}) {

  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  const [show2,setShow2]=useState(false);
  const handleClose2=()=>setShow2(false);
  const handleShow2=()=>setShow2(true);
  useEffect(()=>{
    handleClose();
    },[soru])
  return (
    <>
    <td>1</td>
      <td>{soru.soruBasligi}</td>
      <td>{soru.kategoriler}</td>
      <td>
            <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
            <button onClick={handleShow2} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
        </td>
        <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        SORU DÜZENLE
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <SoruDuzenle theSoru={soru}/>
                    </Modal.Body>
      
                </Modal>

                <Modal show={show2} onHide={handleClose2} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        SORU SİL
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <SoruSil theSoru2={soru} handleClose2={handleClose2}/>
                    </Modal.Body>
      
                </Modal>
          
       
    </>
  )
}

export default Soru