import React from 'react';
import Kategori from './Kategori';
import { useContext,useState,useEffect } from "react";
import { KategorilerContext } from "../../../../Contexts/KategorilerContext";
import { Button,Modal } from "react-bootstrap";
import KategoriEkle from './KategoriEkle';
import Pagination from '../../Pagination';
function KategoriList() {
    const {kategoriler} = useContext(KategorilerContext);
    const [query,setQuery]=useState("");
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    useEffect(()=>{
      handleClose();
      },[kategoriler])

      const [currentPage,setCurrentPage]=useState(1);
      const [kategoriPerPage,setKategoriPerPage]=useState(5);
    
      const handleChange = event => {
        setKategoriPerPage(event.target.value);
     };
    
     const indexOfLastKategori=currentPage * kategoriPerPage;
     const indexOfFirstKategori=indexOfLastKategori - kategoriPerPage;
     const kategori=kategoriler.slice(indexOfFirstKategori,indexOfLastKategori);
     const totalPagesNum= Math.ceil(kategoriler.length / kategoriPerPage);
  return (
    <>
   <div className="container-xl" style={{marginTop:'-30px',marginLeft:"-40px",width:"1040px"}}>
   <div className="table-responsive">
        <div className="table-wrapper">
    <div className='row'>
            <div className="col-sm-9">
            <select value={kategoriPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option> 
                <option value={kategoriler.length}>All</option>
             </select>
           
              <Button onClick={handleShow} className="btn btn-secondary btn-sm table-button"><span>Kategori Ekle</span></Button>
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
              <th>Kategori Türkçe</th>
              <th>Kategori İngilizce</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
              kategori.filter((kategori=>kategori.kategoriTurkce.toLowerCase().includes(query) || kategori.kategoriIngilizce.toLowerCase().includes(query))).sort((a,b)=>a.kategoriTurkce.localeCompare(b.kategoriTurkce)).map((kategori)=>(
                <tr key={kategori.id}>
                    <Kategori kategori={kategori}/>
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
                     Kategori EKLE
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <KategoriEkle/>
              </Modal.Body>
   
        </Modal>
    </>
  )
}

export default KategoriList