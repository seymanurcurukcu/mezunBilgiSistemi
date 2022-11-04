import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const IsIlaniContext=createContext();

const IsIlaniContextProvider=(props)=>{
    const [isIlaniRaporu]= useState(
        [
            {id:uuidv4(),sirketAdi:'ABM MAKİNE A.Ş.',arananPozisyon:'Elektrik Elektronik Mühendisi',sehirUlke:'İzmir',yariTamZamanli:'Tam zamanlı',kacKezGoruntulendi:'26',isIlaniBaslangicTarihi:'2017-12-12',isIlaniBitisTarihi:'2018-03-12'},
            {id:uuidv4(),sirketAdi:'ACADEMIX YURTDIŞI EĞİTİM DANIŞMANLIK',arananPozisyon:'Elektrik Elektronik Mühendisi',sehirUlke:'İzmir',yariTamZamanli:'Tam zamanlı',kacKezGoruntulendi:'26',isIlaniBaslangicTarihi:'2017-12-12',isIlaniBitisTarihi:'2018-03-12'},
            
        ]
    );

    const [isIlaniRaporlari,setIsIlaniRaporlari]=useState(isIlaniRaporu);

  
  
    const [order,setOrder]=useState("ASC")
    const IsIlaniRaporsorting=(col)=>{
       if(order === "ASC"){
               const sorted=[...isIlaniRaporlari].sort((a,b)=>
               a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
           );
           setIsIlaniRaporlari(sorted);
           setOrder("DSC");
       }
       if(order === "DSC"){
           const sorted=[...isIlaniRaporlari].sort((a,b)=>
           a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
       );
       setIsIlaniRaporlari(sorted);
       setOrder("ASC");
      }      
    
   }

    return(
        <IsIlaniContext.Provider value={{isIlaniRaporlari,IsIlaniRaporsorting}}>{props.children}</IsIlaniContext.Provider>
    )
}
export default IsIlaniContextProvider;