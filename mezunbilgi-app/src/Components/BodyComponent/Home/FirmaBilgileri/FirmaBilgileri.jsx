import React,{ useContext } from "react";

import { FirmaBilgileriContext } from "../../../../Contexts/FirmaBilgileriContext";

import FirmaBilgisi from "./FirmaBilgisi";
function FirmaBilgileri() {
  const {firma} = useContext(FirmaBilgileriContext);

  return (
    <>
           
      
            <div className="card">
               
                  {
                    firma.map((Firma)=>(
                      <div className="card-body" key={Firma.id}>
                         <FirmaBilgisi Firma={Firma}/>
                       </div> 
                     ))
                  }
                   

       

                                    
            </div>
          
        
    </>
  )
}

export default FirmaBilgileri