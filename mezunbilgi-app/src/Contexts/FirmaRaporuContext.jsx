import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const FirmaRaporuContext=createContext();

const FirmaRaporuContextProvider=(props)=>{
    const [firmaRaporu]= useState(
        [
            {id:uuidv4(),sirketAdi:'A Plus Eğitim Öğretim Hizmetleri AŞ Düş Mucitleri Bilim Anaokulu',faaliyetAlani:'Eğitim / Öğretim',irtibatKisisi:'Arzu Hızal',telefon:'5374537326',email:'arzu.hizal@dusmucitleri.com.tr',girisSayfasi:'1',cvAramaSayisi:'0',sonGuncellemeTarihi:'2021-03-17 00:00:00'},
           ]
    );

    const [firmaRaporlari,setFirmaRaporlari]=useState(firmaRaporu);

  
  
    const [order,setOrder]=useState("ASC")
    const FirmaRaporsorting=(col)=>{
       if(order === "ASC"){
               const sorted=[...firmaRaporlari].sort((a,b)=>
               a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
           );
           setFirmaRaporlari(sorted);
           setOrder("DSC");
       }
       if(order === "DSC"){
           const sorted=[...firmaRaporlari].sort((a,b)=>
           a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
       );
       setFirmaRaporlari(sorted);
       setOrder("ASC");
      }      
    
   }

    return(
        <FirmaRaporuContext.Provider value={{firmaRaporlari,FirmaRaporsorting}}>{props.children}</FirmaRaporuContext.Provider>
    )
}
export default FirmaRaporuContextProvider;