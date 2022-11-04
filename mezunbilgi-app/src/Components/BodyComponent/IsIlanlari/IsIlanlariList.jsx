import React, { useEffect, useState,useContext } from "react";
import { IsIlanlariContext } from "../../../Contexts/IsIlanlariContext";
import { Button,Modal } from "react-bootstrap";
import IsIlaniEkle from "./IsIlaniEkle";
import IsIlani from "./IsIlani";
import * as XLSX from 'xlsx';
import Pagination from '../Pagination';
import IsIlaniAra from "./IsIlaniAra";
import jsPDF from "jspdf";
import "jspdf-autotable";

const IsIlanlariList=()=>{
  
   const {isilanlari} = useContext(IsIlanlariContext);
   const {IsIlanisorting} = useContext(IsIlanlariContext);
   const [query,setQuery]=useState("");
   const [show,setShow]=useState(false);
   const handleClose=()=>setShow(false);
   const handleShow=()=>setShow(true);
   const [currentPage,setCurrentPage]=useState("");
   const [isIlaniPerPage,setIsIlaniPerPage]=useState(5);
   const indexOfLastIsIlani=currentPage * isIlaniPerPage;
   const indexOfFirstIsIlani=indexOfLastIsIlani - isIlaniPerPage;
   const currentIsIlanilari=isilanlari.slice(indexOfFirstIsIlani,indexOfLastIsIlani);
   const totalPagesNum= Math.ceil(isilanlari.length / isIlaniPerPage);
   const handleChange = event => {
    setIsIlaniPerPage(event.target.value);
  };



   useEffect(()=>{
    handleClose();
    },[isilanlari])
    

  
  const exportPDF = () => {
      const unit = "pt";
      const size = "A2"; // Use A1, A2, A3 or A4
      const orientation = "portrait"; // portrait or landscape
  
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);
  
      doc.setFontSize(15);
  
      const title = "Is Ilanlari";
      const headers = [["Firma Adi", "Firma Kisa Tanitimi","Aranan Pozisyon","Ilan Yeri","Pozisyon Tipi","Ilan Tipi","Email","Firma Iletisim Bilgileri","Anahtar Kelimeler","Ilanin Baslama Tarihi","Son Yayin Tarihi","Ilan Referans No","Durumu"]];
     
      const data = isilanlari.map(isilani=> [isilani.firmaAdi, isilani.firmaKisaTanitimi,isilani.arananPozisyon,isilani.ilanYeri,isilani.pozisyonTipi,isilani.ilanTipi,isilani.email,isilani.firmaIletisimBilgileri,isilani.anahtarKelimeler,isilani.IlaninBaslamaTarihi,isilani.sonYayinTarihi,isilani.ilanReferansNo,isilani.durum]);
  
      let content = {
        startY: 50,
        head: headers,
        body: data
      };
  
      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("IsIlani.pdf")
    }

  const handleOnExport=()=>{
    var wb=XLSX.utils.book_new(),
    ws=XLSX.utils.json_to_sheet(isilanlari);

    XLSX.utils.book_append_sheet(wb,ws,"IsIlanlari");
    XLSX.writeFile(wb,"IsIlanlariExcel.xlsx")
  }

    return(
      <>
       <div className="container-xl">
        <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
           
              <h5>İş İlanı Ara</h5>
            </div>
            
          </div>
        </div>
        <IsIlaniAra/>
      </div>
    </div>
      <div className="table-responsive">
      <div className="table-wrapper">
        
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>İş İlanları</h2>
            </div>
            <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-secondary btn-sm table-button" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>İş İlanı Ekle</span></Button>
            </div>
          </div>
        </div>
        <div className='row'>
            <div className="col-sm-9">
              <Button onClick={handleOnExport} className="btn btn-secondary btn-sm table-button"><span>Excel</span></Button>
              <Button onClick={() =>exportPDF()} className="btn btn-secondary btn-sm table-button"><span>Pdf</span></Button>
        
              <select value={isIlaniPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
            
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option> 
                <option value={isilanlari.length}>All</option>
              </select>
            </div>
            <div className="col-sm-3">
                  <label className="form-group form-label">
                        <input type="text" name='ara'   className="form-control" onChange={(e)=>setQuery(e.target.value)} />
                        <span>Ara</span>
        
                  </label>
              </div>
        </div>

      
        <table className="table sortable tableIsIlanlari table-striped table-hover">
        <thead>
          <tr>
          <th>#</th>
   
            <th onClick={()=>IsIlanisorting("firmaAdi")}>Firma Adı</th>
            <th onClick={()=>IsIlanisorting("arananPozisyon")}>Aranan Pozisyon</th>
            <th onClick={()=>IsIlanisorting("pozisyonTipi")}>Pozisyon Tipi</th>
            <th onClick={()=>IsIlanisorting("email")}>Başvuru için Mail Adresi</th>
            <th onClick={()=>IsIlanisorting("sonYayinTarihi")}>İlanın Son Yayın Tarihi</th>
            <th onClick={()=>IsIlanisorting("durum")}>Durum</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           {
              currentIsIlanilari.filter((isilani=>isilani.firmaAdi.toLowerCase().includes(query) || isilani.arananPozisyon.toLowerCase().includes(query)|| isilani.pozisyonTipi.toLowerCase().includes(query) || isilani.email.toLowerCase().includes(query) || isilani.sonYayinTarihi.toLowerCase().includes(query) || isilani.durum.toLowerCase().includes(query))).map((isilani)=>(
                <tr key={isilani.id}>
                    <IsIlani isilani={isilani}/>
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
                     İŞ İLANI EKLE
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <IsIlaniEkle/>
              </Modal.Body>
   
        </Modal>
        </>
    )
}
export default IsIlanlariList;