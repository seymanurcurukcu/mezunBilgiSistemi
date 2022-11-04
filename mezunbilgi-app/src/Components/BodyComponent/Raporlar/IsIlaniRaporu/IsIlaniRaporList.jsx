import React,{useState,useContext} from 'react'
import Pagination from '../../Pagination';
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from 'xlsx';
import { Button } from "react-bootstrap";
import { IsIlaniContext } from '../../../../Contexts/IsIlaniRaporuContext';
import IsIlaniRapor from './IsIlaniRapor';

function IsIlaniRaporList() {

  const {isIlaniRaporlari} = useContext(IsIlaniContext);
  const {IsIlaniRaporsorting} = useContext(IsIlaniContext);
  const [query,setQuery]=useState("");
 
  const [currentPage,setCurrentPage]=useState("");
  const [isilaniRaporuPerPage,setIsilaniRaporuPerPage]=useState(5);
  const indexOfLastisilaniRaporu=currentPage * isilaniRaporuPerPage;
  const indexOfFirstisilaniRaporu=indexOfLastisilaniRaporu - isilaniRaporuPerPage;
  const currentfisilaniRaporu=isIlaniRaporlari.slice(indexOfFirstisilaniRaporu,indexOfLastisilaniRaporu);
  const totalPagesNum= Math.ceil(isIlaniRaporlari.length / isilaniRaporuPerPage);
  const handleChange = event => {
    setIsilaniRaporuPerPage(event.target.value);
 };



   const exportPDF = () => {
    const unit = "pt";
    const size = "A2"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Is Ilani Raporu";
    const headers = [["Sirket Adi", "Aranan Pozisyon","Sehir/Ülke","Yari/Tam Zamanli","Kac Kez Görüntülendi","Is Ilani Baslangic Tarihi","Is Ilani Bitis Tarihi"]];
   
    const data = isIlaniRaporlari.map(isilaniraporu=> [isilaniraporu.sirketAdi, isilaniraporu.arananPozisyon, isilaniraporu.sehirUlke,isilaniraporu.yariTamZamanli,isilaniraporu.kacKezGoruntulendi,isilaniraporu.isIlaniBaslangicTarihi,isilaniraporu.isIlaniBitisTarihi]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("IsIlaniRaporu.pdf")
  }

const handleOnExport=()=>{
  var wb=XLSX.utils.book_new(),
  ws=XLSX.utils.json_to_sheet(isIlaniRaporlari);

  XLSX.utils.book_append_sheet(wb,ws,"IsIlaniRaporu");
  XLSX.writeFile(wb,"IsIlaniRaporlari.xlsx")
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
           <select value={isilaniRaporuPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
         
             <option value="5">5</option>
             <option value="10">10</option>
             <option value="20">20</option>
             <option value="50">50</option>
             <option value="100">100</option> 
             <option value={isIlaniRaporlari.length}>All</option>
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
         <th onClick={()=>IsIlaniRaporsorting("sirketAdi")}>Şirket Adi</th>
         <th onClick={()=>IsIlaniRaporsorting("arananPozisyon")}>Aranan Pozisyon</th>
         <th onClick={()=>IsIlaniRaporsorting("sehirUlke")}>Şehir/Ülke</th>
         <th onClick={()=>IsIlaniRaporsorting("yariTamZamanli")}>Yarı/Tam Zamanlı</th>
         <th onClick={()=>IsIlaniRaporsorting("kacKezGoruntulendi")}>Kaç Kez Görüntülendi</th>
         <th onClick={()=>IsIlaniRaporsorting("isIlaniBaslangicTarihi")}>İş İlanı Başlangıç Tarihi</th>
         <th onClick={()=>IsIlaniRaporsorting("isIlaniBitisTarihi")}>İş İlanı Bitiş Tarihi</th>
     
    
       </tr>
     </thead>
     <tbody>
        {
           currentfisilaniRaporu.filter((isilaniraporu=>isilaniraporu.sirketAdi.toLowerCase().includes(query) || isilaniraporu.arananPozisyon.toLowerCase().includes(query)|| isilaniraporu.sehirUlke.toLowerCase().includes(query) || isilaniraporu.yariTamZamanli.toLowerCase().includes(query) || isilaniraporu.kacKezGoruntulendi.toLowerCase().includes(query) || isilaniraporu.isIlaniBaslangicTarihi.toLowerCase().includes(query) || isilaniraporu.isIlaniBitisTarihi.toLowerCase().includes(query))).map((isilaniraporu)=>(
             <tr key={isilaniraporu.id}>
                 <IsIlaniRapor isilaniraporu={isilaniraporu}/>
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

export default IsIlaniRaporList