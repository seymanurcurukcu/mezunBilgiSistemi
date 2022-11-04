import React, { useEffect, useState,useContext } from "react";
import MezunAra from './MezunAra';
import MezunEkle from './MezunEkle';
import Pagination from '../Pagination';
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from 'xlsx';
import { Button,Modal } from "react-bootstrap";
import {MezunlarContext} from '../../../Contexts/MezunlarContext';
import Mezun from './Mezun';
function MezunlarList() {
    const {mezunlari} = useContext(MezunlarContext);
    const {Mezunsorting} = useContext(MezunlarContext);
    const [query,setQuery]=useState("");
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    const [currentPage,setCurrentPage]=useState("");
    const [mezunPerPage,setMezunPerPage]=useState(5);
    const indexOfLastMezun=currentPage * mezunPerPage;
    const indexOfFirstMezun=indexOfLastMezun - mezunPerPage;
    const currentMezunlar=mezunlari.slice(indexOfFirstMezun,indexOfLastMezun);
    const totalPagesNum= Math.ceil(mezunlari.length / mezunPerPage);
    const handleChange = event => {
        setMezunPerPage(event.target.value);
   };
 
 
 
    useEffect(()=>{
     handleClose();
     },[mezunlari])
     
 
   
   const exportPDF = () => {
       const unit = "pt";
       const size = "A2"; // Use A1, A2, A3 or A4
       const orientation = "portrait"; // portrait or landscape
   
       const marginLeft = 40;
       const doc = new jsPDF(orientation, unit, size);
   
       doc.setFontSize(15);
   
       const title = "Mezunlar";
       const headers = [["Isim", "Soyisim","Tarih","Bölüm","Kısa Açıklama","Açıklama"]];
      
       const data = mezunlari.map(mezun=> [mezun.isim, mezun.soyIsim,mezun.tarih,mezun.bolum,mezun.kisaAciklama,mezun.aciklama]);
   
       let content = {
         startY: 50,
         head: headers,
         body: data
       };
   
       doc.text(title, marginLeft, 40);
       doc.autoTable(content);
       doc.save("mezunlar.pdf")
     }
 
   const handleOnExport=()=>{
     var wb=XLSX.utils.book_new(),
     ws=XLSX.utils.json_to_sheet(mezunlari);
 
     XLSX.utils.book_append_sheet(wb,ws,"Mezunlari");
     XLSX.writeFile(wb,"MezunlariExcel.xlsx")
   }
  return (
    <>
    <div className="container-xl">
     <div className="table-responsive">
   <div className="table-wrapper">
     <div className="table-title">
       <div className="row">
         <div className="col-sm-5">
        
           <h5>Mezun Ara</h5>
         </div>
         
       </div>
     </div>
     <MezunAra/>
   </div>
 </div>
   <div className="table-responsive">
   <div className="table-wrapper">
     
     <div className="table-title">
       <div className="row">
         <div className="col-sm-6">
           <h2>Mezunlar</h2>
         </div>
         <div className="col-sm-6">
         <Button onClick={handleShow} className="btn btn-secondary btn-sm table-button" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Mezun Ekle</span></Button>
         </div>
       </div>
     </div>
     <div className='row'>
         <div className="col-sm-9">
           <Button onClick={handleOnExport} className="btn btn-secondary btn-sm table-button"><span>Excel</span></Button>
           <Button onClick={() =>exportPDF()} className="btn btn-secondary btn-sm table-button"><span>Pdf</span></Button>
     
           <select value={mezunPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
         
             <option value="5">5</option>
             <option value="10">10</option>
             <option value="20">20</option>
             <option value="50">50</option>
             <option value="100">100</option> 
             <option value={mezunlari.length}>All</option>
           </select>
         </div>
         <div className="col-sm-3">
               <label className="form-group form-label">
                     <input type="text" name='ara'   className="form-control" onChange={(e)=>setQuery(e.target.value)} />
                     <span>Ara</span>
     
               </label>
           </div>
     </div>

   
     <table className="table sortable tableMezun table-striped table-hover">
     <thead>
       <tr>
       <th>#</th>
         <th onClick={()=>Mezunsorting("isim")}>İsim</th>
         <th onClick={()=>Mezunsorting("soyIsim")}>Soyisim</th>
         <th onClick={()=>Mezunsorting("tarih")}>Tarih</th>
         <th onClick={()=>Mezunsorting("bolum")}>Bölüm</th>
         <th>Actions</th>
       </tr>
     </thead>
     <tbody>
        {
           currentMezunlar.filter((mezun=>mezun.isim.toLowerCase().includes(query) || mezun.soyIsim.toLowerCase().includes(query)|| mezun.tarih.toLowerCase().includes(query) || mezun.bolum.toLowerCase().includes(query))).map((mezun)=>(
             <tr key={mezun.id}>
                 <Mezun mezun={mezun}/>
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

     <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"90px",height:"500px"}}>
           <Modal.Header className="modal-header" closeButton>
               <Modal.Title>
                  Mezun EKLE
               </Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <MezunEkle/>
           </Modal.Body>

     </Modal>
     </>
  )
}

export default MezunlarList