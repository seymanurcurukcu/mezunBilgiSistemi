import React,{useState,useContext} from 'react'
import Pagination from '../../Pagination';
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from 'xlsx';
import { Button} from "react-bootstrap";
import {FirmaRaporuContext} from '../../../../Contexts/FirmaRaporuContext';
import FirmaRapor from './FirmaRapor';
function FirmaRaporuList() {
  const {firmaRaporlari} = useContext(FirmaRaporuContext);
  const {FirmaRaporsorting} = useContext(FirmaRaporuContext);
  const [query,setQuery]=useState("");
 
  const [currentPage,setCurrentPage]=useState("");
  const [firmaRaporuPerPage,setfirmaRaporuPerPage]=useState(5);
  const indexOfLastfirmaRaporu=currentPage * firmaRaporuPerPage;
  const indexOfFirstfirmaRaporu=indexOfLastfirmaRaporu - firmaRaporuPerPage;
  const currentfirmaRaporu=firmaRaporlari.slice(indexOfFirstfirmaRaporu,indexOfLastfirmaRaporu);
  const totalPagesNum= Math.ceil(firmaRaporlari.length / firmaRaporuPerPage);
  const handleChange = event => {
    setfirmaRaporuPerPage(event.target.value);
 };



   const exportPDF = () => {
    const unit = "pt";
    const size = "A2"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Firma Raporu";
    const headers = [["Sirket Adi", "Faaliyet Alani","irtibat kisisi","Telefon","Email","Giris Sayfasi","Cv Arama Sayisi","Son Guncelleme Tarihi"]];
   
    const data = firmaRaporlari.map(firmaraporu=> [firmaraporu.sirketAdi, firmaraporu.faaliyetAlani, firmaraporu.irtibatKisisi,firmaraporu.telefon,firmaraporu.email,firmaraporu.girisSayfasi,firmaraporu.cvAramaSayisi,firmaraporu.sonGuncellemeTarihi]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("FirmaRaporu.pdf")
  }

const handleOnExport=()=>{
  var wb=XLSX.utils.book_new(),
  ws=XLSX.utils.json_to_sheet(firmaRaporlari);

  XLSX.utils.book_append_sheet(wb,ws,"FirmaRaporlari");
  XLSX.writeFile(wb,"firmaRaporlari.xlsx")
}

  return (
    <>
    <div className="container-xl" style={{marginTop:'-30px',marginLeft:"-40px",width:"1040px"}}>
   <div className="table-responsive">
   <div className="table-wrapper">
     <div className='row'>
         <div className="col-sm-9">
           <Button onClick={handleOnExport} className="btn btn-secondary btn-sm table-button"><span>Excel</span></Button>
           <Button onClick={() =>exportPDF()} className="btn btn-secondary btn-sm table-button"><span>Pdf</span></Button>
           <select value={firmaRaporuPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
         
             <option value="5">5</option>
             <option value="10">10</option>
             <option value="20">20</option>
             <option value="50">50</option>
             <option value="100">100</option> 
             <option value={firmaRaporlari.length}>All</option>
           </select>
         </div>
         <div className="col-sm-3">
               <label className="form-group form-label">
                     <input type="text" name='ara'   className="form-control" onChange={(e)=>setQuery(e.target.value)} />
                     <span>Ara</span>
     
               </label>
           </div>
     </div>

   
     <table className="table sortable tableFirmaRapor table-striped table-hover">
     <thead>
       <tr>
       <th>#</th>
         <th onClick={()=>FirmaRaporsorting("sirketAdi")}>Şirket Adi</th>
         <th onClick={()=>FirmaRaporsorting("faaliyetAlani")}>Faaliyet Alanı</th>
         <th onClick={()=>FirmaRaporsorting("irtibatKisisi")}>İrtibat Kişisi</th>
         <th onClick={()=>FirmaRaporsorting("telefon")}>Telefon</th>
         <th onClick={()=>FirmaRaporsorting("email")}>Email</th>
         <th onClick={()=>FirmaRaporsorting("girisSayfasi")}>Giriş Sayfası Sayısı</th>
         <th onClick={()=>FirmaRaporsorting("cvAramaSayisi")}>Cv Arama Sayısı</th>
         <th onClick={()=>FirmaRaporsorting("sonGuncellemeTarihi")}>Son Güncelleme Tarihi</th>
    
       </tr>
     </thead>
     <tbody>
        {
           currentfirmaRaporu.filter((firmaraporu=>firmaraporu.sirketAdi.toLowerCase().includes(query) || firmaraporu.faaliyetAlani.toLowerCase().includes(query)|| firmaraporu.irtibatKisisi.toLowerCase().includes(query) || firmaraporu.telefon.toLowerCase().includes(query) || firmaraporu.girisSayfasi.toLowerCase().includes(query) || firmaraporu.cvAramaSayisi.toLowerCase().includes(query) || firmaraporu.sonGuncellemeTarihi.toLowerCase().includes(query))).map((firmaraporu)=>(
             <tr key={firmaraporu.id}>
                 <FirmaRapor firmaraporu={firmaraporu}/>
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

export default FirmaRaporuList