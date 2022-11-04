import React, { Component } from 'react'
import Sorular from '../SorulanSorular/Sorular/Sorular'
import Kategoriler from '../SorulanSorular/Kategoriler/Kategoriler'
export class SorulanSorular extends Component {
  render() {
    return (
      <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>Sık Sorulan Sorular</h2>
              </div> 
            </div>
          </div>
        
          <ul className="nav nav-tabs" role="tablist">
         <li className="nav-item">
           <a className="nav-link active" data-toggle="tab" href="#moduller">Soru Listesi</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" data-toggle="tab" href="#modules" >Kategori Listesi</a>
         </li>
       
       </ul>
       <div className="tab-content">
         <div id="moduller" className="container tab-pane active">
          
         <Sorular/>
          
     
     
     
     
          </div>
         <div id="modules" className="container tab-pane fade">
           <Kategoriler/>
          
     
          
         </div>
     
     
     
       
     
       
       
     </div>
        </div>
      </div>
     </div>
    )
  }
}

export default SorulanSorular
