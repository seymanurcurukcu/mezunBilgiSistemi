
import React,{useEffect,useState} from "react";
import KategoriDuzenle from "./KategoriDuzenle";
import { Modal } from "react-bootstrap";
import KategoriSil from "./KategoriSil";
function Kategori({kategori}) {


  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  const [show2,setShow2]=useState(false);
  const handleClose2=()=>setShow2(false);
  const handleShow2=()=>setShow2(true);
  useEffect(()=>{
    handleClose();
    },[kategori])
  return (
    <>
    <td>1</td>
      <td>{kategori.kategoriTurkce}</td>
      <td>{kategori.kategoriIngilizce}</td>
      <td>
            <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
            <button onClick={handleShow2} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
        </td>
        <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        KATEGORİ DÜZENLE
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <KategoriDuzenle theKategori={kategori}/>
                    </Modal.Body>
      
                </Modal>
                <Modal show={show2} onHide={handleClose2} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
                      <Modal.Header className="modal-header" closeButton>
                      <Modal.Title>
                        KATEGORİ SİL
                      </Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <KategoriSil theKategori2={kategori} handleClose2={handleClose2}/>
                    </Modal.Body>
      
                </Modal>
    </>
  )
}

export default Kategori