import React,{useContext,useState} from 'react'
import Cv from './Cv'
import { CvAramaContext } from '../../../Contexts/CvAramaContext';
import Pagination from './CvPagination';
import * as XLSX from 'xlsx';
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import CvAra from './CvAra';
function CvList() {
  const {cv} = useContext(CvAramaContext);
  const {Cvsorting} = useContext(CvAramaContext);
  const [currentPage,setCurrentPage]=useState("");
  const [cvAramaPerPage,setcvAramaPerPage]=useState(5);

  const handleChange = event => {
    setcvAramaPerPage(event.target.value);
 };
const [query,setQuery]=useState("");
 const indexOfLastCv=currentPage * cvAramaPerPage;
 const indexOfFirstCv=indexOfLastCv - cvAramaPerPage;
 const CV=cv.slice(indexOfFirstCv,indexOfLastCv);
 const totalPagesNum= Math.ceil(cv.length / cvAramaPerPage);


 const exportPDF = () => {
  const unit = "pt";
  const size = "A2"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape

  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);

  doc.setFontSize(15);

  const title = "Mezun Cv'leri";
  const headers = [["Mezun Adi Soyadi", "Bolumu","Mezun Oldugu Yil","Calistigi Firma","Calistigi Sektor","Gorevi","Bildigi Ikinci Yabanci Dil","Egitim Tipi","Email","Askerlik Durumu","Sehir","Departmani","ingilizce Anlama","ingilizce Yazma","ingilizce Konusma"]];
 


  const data = cv.map(cv=> [cv.mezunAdiSoyadi,cv.bolum,cv.mezunOlduguYil,cv.calistigiFirma,cv.calistigiSektor,cv.gorevi,cv.bildigiIkinciYabanciDil,cv.egitimTipi,cv.email,cv.askerlikDurumu,cv.sehir,cv.departmani,cv.ingilizceAnlama,cv.ingilizceYazma,cv.ingilizceKonusma]);

  let content = {
    startY: 50,
    head: headers,
    body: data
  };

  doc.text(title, marginLeft, 40);
  doc.autoTable(content);
  doc.save("cvler.pdf")
}

 const handleOnExport=()=>{
  var wb=XLSX.utils.book_new(),
  ws=XLSX.utils.json_to_sheet(cv);

  XLSX.utils.book_append_sheet(wb,ws,"cv");
  XLSX.writeFile(wb,"cv.xlsx")
}
  return (
    <>
          <div className="container-xl">
     <div className="table-responsive">
       <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
             <div className="col-sm-5">
                <h5>CV Ara</h5>
             </div>
           </div>
         </div>
                <CvAra/>
        
            </div>
       </div>
        <div className="table-responsive">
      <div className="tablewrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
           
              <h5>Bulunan Cv </h5>
            </div>
           
          </div>
        </div>
        <div className='row'>
            <div className="col-sm-9">
              <Button onClick={handleOnExport}  className="btn btn-secondary btn-sm table-button"><span>Excel</span></Button>
              <Button onClick={() =>exportPDF()} className="btn btn-secondary btn-sm table-button"><span>Pdf</span></Button>
              <select value={cvAramaPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option> 
                <option value={cv.length}>All</option>
             </select>
            </div>
            <div className="col-sm-3" style={{marginRight:'1px',marginTop:'10px'}}>
                  <label className="form-group form-label">
                        <input type="text" name='ara'   className="form-control" onChange={(e)=>setQuery(e.target.value)}/>
                        <span>Ara</span>
                   
                  </label>
              </div>
        </div>
       
        <table className="table sortable tableCv table-striped table-hover">
          <thead>
            <tr>
            
              <th onClick={()=>{Cvsorting("mezunAdiSoyadi")}}>Mezun Adı-Soyadı</th>
              <th onClick={()=>{Cvsorting("bolum")}}>Bölüm</th>
              <th onClick={()=>{Cvsorting("mezunOlduguYil")}}>Mezun Olduğu Yıl</th>
              <th onClick={()=>{Cvsorting("calistigiFirma")}}>Çalıştığı Firma</th>
              <th onClick={()=>{Cvsorting("calistigiSektor")}}>Çalıştığı Sektör</th>
              <th onClick={()=>{Cvsorting("gorevi")}}>Görevi</th>
              <th onClick={()=>{Cvsorting("bildigiIkinciYabanciDil")}}>Bildiği İkinci Yabancı Dil</th>
              <th onClick={()=>{Cvsorting("egitimTipi")}}>Eğitim Tipi</th>
              <th onClick={()=>{Cvsorting("email")}}>E-Mail</th>
              <th>Özgeçmiş</th>
         
            </tr>
          </thead>
          <tbody>
          {
            CV.filter((cv=>cv.mezunAdiSoyadi.toLowerCase().includes(query) || cv.bolum.toLowerCase().includes(query) || cv.mezunOlduguYil.toLowerCase().includes(query) || cv.calistigiFirma.toLowerCase().includes(query) || cv.calistigiSektor.toLowerCase().includes(query) || cv.gorevi.toLowerCase().includes(query) || cv.bildigiIkinciYabanciDil.toLowerCase().includes(query) || cv.egitimTipi.toLowerCase().includes(query) || cv.email.toLowerCase().includes(query))).map((cv)=>{
              return(
                <tr key={cv.id}>
                   <Cv cv={cv}/>
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
    </>
  )
}

export default CvList