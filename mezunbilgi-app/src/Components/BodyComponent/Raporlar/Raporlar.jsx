import React from 'react';
import '../mezun.css';
import FirmaRaporu from './FirmaRaporu/FirmaRaporu';
import IsIlaniRaporu from './IsIlaniRaporu/IsIlaniRaporu';
function Raporlar() {
  return (
   <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>Firma Bilgileri Paneli</h2>
              </div> 
            </div>
          </div>
        
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#moduller">Firma Raporu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#modules" >İş İlanı Raporu</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="moduller" className="container tab-pane active">
                <FirmaRaporu/>
            </div>
            <div id="modules" className="container tab-pane fade">
                <IsIlaniRaporu/>
              </div>
          </div>
        </div>
     </div>
  </div>
  )
}

export default Raporlar
