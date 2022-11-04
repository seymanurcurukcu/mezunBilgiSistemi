import { Chart } from 'chart.js';
import React, { Component } from 'react'
import FirmaBilgileri from './FirmaBilgileri/FirmaBilgileri';
import Haberler from './Haberler/Haberler';
import './Home.css';
import IsIlanlari from './IsIlanlari/IsIlanlari';
import ApexCharts from './Chart/ApexChart';
import FirmaBilgileriContextProvider from '../../../Contexts/FirmaBilgileriContext';
import IsIlanlariContextProvider from '../../../Contexts/IsIlanlariContext';
import SliderContextProvider from '../../../Contexts/SliderContext';
export class Home extends Component {
  render() {
    return (
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
          <div className="table-title">
             <div className="row">
                <div className="col-sm-5">
              
                  <h5>HOME</h5>
                </div>
            </div>
           </div>
          
            <div className="row">
              <div className="col-xl-4" style={{marginTop:"10px"}}>
                <FirmaBilgileriContextProvider>
                <FirmaBilgileri/>
                </FirmaBilgileriContextProvider>
                
              </div>
              <div className="col-xl-8">  
              <ApexCharts/>
                
              </div>
            </div> 
            <div className="row">
              
               <div className="col-xl-12">
                <IsIlanlariContextProvider>
                <IsIlanlari/>
                </IsIlanlariContextProvider>
               
               </div>
             </div>
             <div className='row'>
             <div className="col-xl-12" style={{marginTop:"30px"}}>
                <SliderContextProvider>
                  <Haberler/>
                </SliderContextProvider>
                  
               </div>
             </div>
         </div>
       </div>
     </div>
    )
  }
}

export default Home