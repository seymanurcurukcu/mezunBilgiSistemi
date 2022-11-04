import React, { useContext,useState,useEffect } from 'react'
import { Button,Modal } from "react-bootstrap";
import HaberAra from './HaberAra';
import Haber from './Haber';
import {HaberlerContext} from '../../../Contexts/HaberlerContext';
import Pagination from '../Pagination';
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import "jspdf-autotable";
import HaberEkle from "./HaberEkle";
function HaberPaneliList() {
    const {haber} =useContext(HaberlerContext);
    const {Haberlersorting} =useContext(HaberlerContext);
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    const [query,setQuery]=useState("");
    const [currentPage,setCurrentPage]=useState(1);
    const [haberlerPerPage,sethaberlerPerPage]=useState(5);
    const indexOfLastHaberler=currentPage * haberlerPerPage;
    const indexOfFirstHaberler=indexOfLastHaberler - haberlerPerPage;
    const currentHaberler=haber.slice(indexOfFirstHaberler,indexOfLastHaberler);
    const totalPagesNum= Math.ceil(haber.length / haberlerPerPage);
    const handleChange = event => {
        sethaberlerPerPage(event.target.value);
   };

   useEffect(()=>{
    handleClose();
    },[haber])

   const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Haberler";
    const headers = [["Haber Basligi", "Tarih","Gönderen","Anasayfa","Durum"]];
   
    const data = haber.map(Haber=> [Haber.haberBasligi, Haber.tarih,Haber.gonderen,Haber.anasayfa,Haber.durum]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("Haber.pdf")
  }


   const handleOnExport=()=>{
    var wb=XLSX.utils.book_new(),
    ws=XLSX.utils.json_to_sheet(haber);

    XLSX.utils.book_append_sheet(wb,ws,"Haberler");
    XLSX.writeFile(wb,"HaberlerExcel.xlsx")
  }
  return (
    <>
    <div className="container-xl">
     <div className="table-responsive">
   <div className="table-wrapper">
     <div className="table-title">
       <div className="row">
         <div className="col-sm-5">
        
           <h2>Haber Ara</h2>
         </div>
         
       </div>
     </div>
     <HaberAra/>


   </div>
 </div>
   <div className="table-responsive">
   <div className="table-wrapper">
     
     <div className="table-title">
       <div className="row">
         <div className="col-sm-6">
           <h2>Haberler</h2>
         </div>
         <div className="col-sm-6">
         <Button onClick={handleShow} className="btn btn-secondary btn-sm table-button" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Yeni Haber Ekle</span></Button>
         </div>
       </div>
     </div>
     <div className='row'>
         <div className="col-sm-9">
           <Button onClick={handleOnExport} className="btn btn-secondary btn-sm table-button"><span>Excel</span></Button>
           <Button onClick={exportPDF} className="btn btn-secondary btn-sm table-button"><span>Pdf</span></Button>
     
           <select value={haberlerPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
             <option value="5">5</option>
             <option value="10">10</option>
             <option value="20">20</option>
             <option value="50">50</option>
             <option value="100">100</option> 
             <option value={haber.length}>All</option>
           </select>
         </div>
         <div className="col-sm-3">
               <label className="form-group form-label">
                     <input type="text" name='ara' className="form-control" onChange={(e)=>setQuery(e.target.value)}/>
                     <span>Ara</span>
     
               </label>
           </div>
     </div>

   
     <table className="table sortable tableHaber table-striped table-hover">
     <thead>
       <tr>
        
         <th onClick={()=>{Haberlersorting('haberBasligi')}}>Haber Başlığı</th>
         <th onClick={()=>{Haberlersorting('tarih')}}>Tarih</th>
         <th onClick={()=>{Haberlersorting('gonderen')}}>Gönderen</th>
         <th>Anasayfa</th>
         <th>Durum</th>
         <th>Actions</th>
       </tr>
     </thead>
     <tbody>
        {
             currentHaberler.filter((haber=>haber.haberBasligi.toLowerCase().includes(query) || haber.tarih.toLowerCase().includes(query)|| haber.gonderen.toLowerCase().includes(query))).map((haber)=>{
                return(
                    <tr key={haber.id}>
                    <Haber haber={haber}/>
                    </tr>
                )
             })
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

<Modal show={show} onHide={handleClose} size="md" 
aria-labelledby="contained-modal-title-vcenter" centered style={{marginTop:"20px"}}>
              <Modal.Header className="modal-header" closeButton>
                  <Modal.Title>
                     HABER EKLE
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HaberEkle/>
              </Modal.Body>
   
        </Modal>
     </>
  )
}

export default HaberPaneliList
