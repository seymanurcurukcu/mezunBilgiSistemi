import React, { useState } from "react";
import BugunDoganMezun from "./BugunDoganMezun";
import { useContext } from "react";
import { BugunDoganMezunlarContext } from "../../../Contexts/BugunDoganMezunlarContext";
import * as XLSX from 'xlsx';
import { Button } from "react-bootstrap";
import Pagination from "../Pagination";
import BugunDoganMezunAra from './BugunDoganMezunAra';
import jsPDF from "jspdf";

const BugunDoganMezunList=()=>{
    const {mezunlar} = useContext(BugunDoganMezunlarContext);
    const {Mezunsorting} = useContext(BugunDoganMezunlarContext);
    const [query,setQuery]=useState("");

    const [currentPage,setCurrentPage]=useState("");
    const [bugunDoganMezunlarPerPage,setBugunDoganMezunlarPerPage]=useState(5);
 
    const handleChange = event => {
      setBugunDoganMezunlarPerPage(event.target.value);
   };
 
   const indexOfLastMezun=currentPage * bugunDoganMezunlarPerPage;
   const indexOfFirstMezun=indexOfLastMezun - bugunDoganMezunlarPerPage;
   const mezun=mezunlar.slice(indexOfFirstMezun,indexOfLastMezun);
   const totalPagesNum= Math.ceil(mezunlar.length / bugunDoganMezunlarPerPage);

   const exportPDF = () => {
    const unit = "pt";
    const size = "A2"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    const title = "Bugün Doğan Mezun Listesi";
    const headers = [["Mezun Adı-Soyadı", "E-Mail","Telefon No","Fakülte","Bölüm"]];
    const data = mezunlar.map(mezun=> [mezun.mezunAdiSoyadi, mezun.email,mezun.telefonNo,mezun.fakulte,mezun.bolum]);
    let content = {
      startY: 50,
      head: headers,
      body: data
    };
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("bugunDoganMezunlar.pdf")
  }

    const handleOnExport=()=>{
        var wb=XLSX.utils.book_new(),
        ws=XLSX.utils.json_to_sheet(mezunlar);
    
        XLSX.utils.book_append_sheet(wb,ws,"mezunlar");
        XLSX.writeFile(wb,"BugunDoganMezunlarExcel.xlsx")
      }
    return(
      <>
      <div className="container-xl">
        <div className="table-responsive">
            <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
              
                  <h5>Bugün Doğan Mezun Ara</h5>
                </div>
              </div>
            </div>
                <BugunDoganMezunAra/>
            </div>
       </div>
      <div className="table-responsive">
      <div className="table-wrapper">
            <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
           
              <h5>Bugün Doğan Mezunlar</h5>
            </div>
           
          </div>
        </div>
        <div className='row'>
            <div className="col-sm-9">
            <Button onClick={handleOnExport} className="btn btn-secondary btn-sm table-button"><span>Excel</span></Button>
              <Button onClick={() =>exportPDF()} className="btn btn-secondary btn-sm table-button"><span>Pdf</span></Button>
              <select value={bugunDoganMezunlarPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option> 
                <option value={mezunlar.length}>All</option>
             </select>
            </div>
            <div className="col-sm-3">
                  <label className="form-group form-label">
                        <input type="text" name='ara'   className="form-control" onChange={(e)=>setQuery(e.target.value)}/>
                        <span>Ara</span>
                 
                  </label>
              </div>
        </div>

        <table className="table sortable table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th onClick={()=>{Mezunsorting("mezunAdiSoyadi")}}>Adı-Soyadı</th>
              <th onClick={()=>{Mezunsorting("email")}}>E-Mail</th>
              <th onClick={()=>{Mezunsorting("telefonNo")}}>Cep Telefonu</th>
              <th onClick={()=>{Mezunsorting("fakulte")}}>Fakülte</th>
              <th onClick={()=>{Mezunsorting("bolum")}}>Bölüm</th>
            </tr>
          </thead>
          <tbody>
          {
              mezun.filter((mezun=>mezun.mezunAdiSoyadi.toLowerCase().includes(query) || mezun.email.toLowerCase().includes(query) || mezun.telefonNo.toLowerCase().includes(query) || mezun.fakulte.toLowerCase().includes(query) || mezun.bolum.toLowerCase().includes(query))).map((mezun)=>(
                <tr key={mezun.id}>
                    <BugunDoganMezun mezun={mezun}/>
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
        </>
    )
}
export default BugunDoganMezunList;