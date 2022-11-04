import React,{useState,useEffect} from "react";

import HaberDuzenle from "./HaberDuzenle";
import { Modal } from "react-bootstrap";
import HaberSil from "./HaberSil";
function Haber({haber}) {

  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  const [show2,setShow2]=useState(false);
  const handleClose2=()=>setShow2(false);
  const handleShow2=()=>setShow2(true);
  useEffect(()=>{
    handleClose();
    },[haber])
  return (
    <>
    <td>{haber.haberBasligi}</td>
    <td>{haber.tarih}</td>
    <td>{haber.gonderen}</td>
    <td>{
       haber.anasayfa==='Aktif' ? <i style={{color:"rgb(136 233 136)",fontSize: "30px"}} className="material-icons md-48" data-toggle="tooltip" title="Anasayfada">check</i> :
       <i style={{color:"rgb(225 76 76)",fontSize: "30px"}} className="material-icons" data-toggle="tooltip" title="Anasayfada değil">close</i>
        }
    </td>
    <td>
        {
         haber.durum==='Aktif' ? <i style={{color:"rgb(136 233 136)",fontSize: "30px"}} className="material-icons md-48" data-toggle="tooltip" title="Anasayfada">check</i> :
         <i style={{color:"rgb(225 76 76)",fontSize: "30px"}} className="material-icons" data-toggle="tooltip" title="Anasayfada değil">close</i>
        }
    </td>
    <td>
       <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
        <button onClick={handleShow2} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
    </td>
    <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        HABER DÜZENLE
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <HaberDuzenle theHaber={haber}/>
                    </Modal.Body>
      
                </Modal>

                <Modal show={show2} onHide={handleClose2} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        HABER SİL
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <HaberSil theHaber2={haber} handleClose2={handleClose2}/>
                    </Modal.Body>
      
                </Modal>
</>

  )
}

export default Haber