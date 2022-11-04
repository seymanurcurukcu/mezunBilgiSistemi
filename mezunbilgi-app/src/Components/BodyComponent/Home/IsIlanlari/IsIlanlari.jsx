import React,{useContext,useState} from 'react'
import { IsIlanlariContext } from '../../../../Contexts/IsIlanlariContext';
import IsIlani from './IsIlani';
import Pagination from '../../Pagination';
function IsIlanlari() {
  const {isilanlari} = useContext(IsIlanlariContext);
  const {IsIlanisorting} = useContext(IsIlanlariContext);

  const [currentPage,setCurrentPage]=useState("");
  const [isIlaniPerPage,setIsIlaniPerPage]=useState(5);
  const indexOfLastIsIlani=currentPage * isIlaniPerPage;
  const indexOfFirstIsIlani=indexOfLastIsIlani - isIlaniPerPage;
  const currentIsIlanilari=isilanlari.slice(indexOfFirstIsIlani,indexOfLastIsIlani);
  const totalPagesNum= Math.ceil(isilanlari.length / isIlaniPerPage);
  const handleChange = event => {
    setIsIlaniPerPage(event.target.value);
  };
  return (
    <>
        <div className="table-responsive">
                    <div className="table-wrapper">
                      <div className="table-title">
                        <div className="row">
                          <div className="col-sm-5">
                        
                            <h5>İş İlanlarım </h5>
                          </div>
                        
                        </div>
                      </div>
                      <div className='row'>
                        <div className="col-sm-9">
                        
                          <select value={isIlaniPerPage} onChange={handleChange} className="btn btn-secondary btn-sm table-button">
                        
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option> 
                            <option value={isilanlari.length}>All</option>
                          </select>
                        </div>
           
                       </div>
       
                <table className="table sortable table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th onClick={()=>IsIlanisorting("firmaAdi")}>Firma Adı</th>
                      <th onClick={()=>IsIlanisorting("arananPozisyon")}>Aranan Pozisyon</th>
                      <th onClick={()=>IsIlanisorting("pozisyonTipi")}>Pozisyon Tipi</th>
                      <th onClick={()=>IsIlanisorting("email")}>Başvuru için Mail Adresi</th>
                      <th onClick={()=>IsIlanisorting("sonYayinTarihi")}>İlanın Son Yayın Tarihi</th>
                      <th onClick={()=>IsIlanisorting("durum")}>Durum</th>
                    
                
                    </tr>
                  </thead>
                  <tbody>
                    {
                      currentIsIlanilari.map((isilani)=>{
                        return(
                           <tr key={isilani.id}>
                            <IsIlani isilani={isilani}/>
                             
                           </tr>
                        )
                      })
                    }
                    
                  
                  </tbody>
                </table>
          
            </div>
           </div>
           <Pagination 
         pages={totalPagesNum} 
         setCurrentPage={setCurrentPage}
         />
    </>
  )
}

export default IsIlanlari