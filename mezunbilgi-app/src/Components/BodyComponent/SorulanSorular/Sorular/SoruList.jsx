import React from 'react';
import Soru from './Soru';
import { useContext,useState,useEffect } from "react";
import { SorularContext } from "../../../../Contexts/SorularContext";
import { Button,Modal } from "react-bootstrap";
import SoruEkle from './SoruEkle';
import Pagination from '../../Pagination';
function SoruList() {
  const {sorular} = useContext(SorularContext);
  const [query,setQuery]=useState("");
  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);
  useEffect(()=>{
    handleClose();
    },[sorular])

    const [currentPage,setCurrentPage]=useState(1);
    const [soruPerPage,setSoruPerPage]=useState(5);
  
    const handleChange = event => {
      setSoruPerPage(event.target.value);
   };
  
   const indexOfLastSoru=currentPage * soruPerPage;
   const indexOfFirstSoru=indexOfLastSoru - soruPerPage;
   const soru=sorular.slice(indexOfFirstSoru,indexOfLastSoru);
   const totalPagesNum= Math.ceil(sorular.length / soruPerPage);
  return (
    <>
    
    <div className="container-xl" style={{marginTop:'-30px',marginLeft:"-40px",width:"1040px"}}>
   <div className="table-responsive">
       <div className="table-wrapper">
  
       <div className='row'>
           <div className="col-sm-9">
           <select value={soruPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option> 
                <option value={sorular.length}>All</option>
             </select>
             <Button onClick={handleShow} className="btn btn-secondary btn-sm table-button"><span>Yeni Soru Ekle</span></Button>
           </div>
           <div className="col-sm-3">
                 <label className="form-group form-label">
                       <input type="text" name='ara'   className="form-control" onChange={(e)=>setQuery(e.target.value)}/>
                       <span>Ara</span>
       
                 </label>
             </div>
       </div>
       <table className="table table-striped table-hover">
         <thead>
           <tr>
             <th>#</th>
             <th>Soru Başlığı</th>
             <th>Kategoriler</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
         {
              soru.filter((soru=>soru.soruBasligi.toLowerCase().includes(query) || soru.kategoriler.toLowerCase().includes(query))).sort((a,b)=>a.soruBasligi.localeCompare(b.soruBasligi)).map((soru)=>(
                <tr key={soru.id}>
                    <Soru soru={soru}/>
                </tr>
              ))
           }
          
      
        
           
         </tbody>
       </table>
     
       </div>
       </div>
       </div>
       <Pagination 
         pages={totalPagesNum} 
         setCurrentPage={setCurrentPage}
         />
       <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
              <Modal.Header className="modal-header" closeButton>
                  <Modal.Title>
                     Soru EKLE
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SoruEkle/>
              </Modal.Body>
   
        </Modal>
    </>
  )
}

export default SoruList