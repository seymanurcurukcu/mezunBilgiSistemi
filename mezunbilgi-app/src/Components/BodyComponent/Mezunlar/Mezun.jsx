import React,{useState,useEffect} from "react";
import { Modal } from "react-bootstrap";
import MezunDuzenle from "./MezunDuzenle";
import MezunSil from "./MezunSil";
function Mezun({mezun}) {

    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    const [show2,setShow2]=useState(false);
    const handleClose2=()=>setShow2(false);
    const handleShow2=()=>setShow2(true);
  
    useEffect(()=>{
      handleClose();
      },[mezun])
  return (
    <>
     
    <td>1</td>
    <td>{mezun.isim}</td>
    <td>{mezun.soyIsim}</td>
    <td>{mezun.tarih}</td>
    <td>{mezun.bolum}</td>


    <td>
    
       <button  onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
        <button onClick={handleShow2} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
      </td>
      <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"90px",height:"500px"}}>
          <Modal.Header className="modal-header" closeButton>
          <Modal.Title>
            MEZUN DÜZENLE
          </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <MezunDuzenle theMezun={mezun}/>
        </Modal.Body>

    </Modal>
    <Modal show={show2} onHide={handleClose2} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        MEZUN SİL
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <MezunSil theMezun2={mezun} handleClose2={handleClose2}/>
                    </Modal.Body>
      
                </Modal>

   

</>
  )
}

export default Mezun