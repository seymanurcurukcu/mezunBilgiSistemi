import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import avatar from '../logo/avatar.jpg'
export const BugunDoganMezunlarContext=createContext();

const BugunDoganMezunlarContextProvider=(props)=>{
  
    const [bugunDoganMezunlar]= useState(
        [
            {id:uuidv4(), resim:avatar, mezunAdiSoyadi:'Anıl KANIGÜR', email:'anilkanigur@hotmail.com', telefonNo:'055555515', fakulte:'Mühendislik Fakültesi',bolum:'Bilgisayar Mühendisliği'},
            {id:uuidv4(), resim:avatar, mezunAdiSoyadi:'Yasemin KANIGÜR', email:'yaseminkanigur@hotmail.com', telefonNo:'055555525', fakulte:'Mühendislik Fakültesi',bolum:'yazılım Mühendisliği'},
           
             {id:uuidv4(), resim:avatar, mezunAdiSoyadi:'Anıl KANIGÜR', email:'anilkanigur@hotmail.com', telefonNo:'055555545', fakulte:'Mühendislik Fakültesi',bolum:'Bilgisayar Mühendisliği'},
            {id:uuidv4(), resim:avatar, mezunAdiSoyadi:'Yasemin KANIGÜR', email:'yaseminkanigur@hotmail.com', telefonNo:'055555555', fakulte:'Mühendislik Fakültesi',bolum:'yazılım Mühendisliği'},
        
            {id:uuidv4(), resim:avatar, mezunAdiSoyadi:'Anıl KANIGÜR', email:'anilkanigur@hotmail.com', telefonNo:'055555575', fakulte:'Mühendislik Fakültesi',bolum:'Bilgisayar Mühendisliği'},
            {id:uuidv4(), resim:avatar, mezunAdiSoyadi:'Yasemin KANIGÜR', email:'yaseminkanigur@hotmail.com', telefonNo:'055555585', fakulte:'Fen Edebiyat Fakültesi',bolum:'yazılım Mühendisliği'},
           
   
        ]
    );
    const [mezunlar,setMezunlar]= useState(bugunDoganMezunlar);

    const MezunFilter = (Fakulte,Bolum,MezunAdiSoyadi,Email,TelefonNo) => {
        const itemsUpdate = bugunDoganMezunlar.filter(item => {
          var fakulte=item.fakulte.toLowerCase().indexOf(Fakulte.toLowerCase())!== -1;
          var bolum=item.bolum.toLowerCase().indexOf(Bolum.toLowerCase())!== -1;
          var mezunAdiSoyadi=item.mezunAdiSoyadi.toLowerCase().indexOf(MezunAdiSoyadi.toLowerCase())!== -1;
          var email=item.email.toLowerCase().indexOf(Email.toLowerCase())!== -1;
          var telefonNo=item.telefonNo.toLowerCase().indexOf(TelefonNo.toLowerCase())!== -1;
    
          return fakulte && bolum && mezunAdiSoyadi && email && telefonNo;
        });
        setMezunlar(itemsUpdate);
      
      };

      const [order,setOrder]=useState("ASC")
      const Mezunsorting=(col)=>{
         if(order === "ASC"){
                 const sorted=[...mezunlar].sort((a,b)=>
                 a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
             );
             setMezunlar(sorted);
             setOrder("DSC");
         }
         if(order === "DSC"){
             const sorted=[...mezunlar].sort((a,b)=>
             a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
         );
         setMezunlar(sorted);
         setOrder("ASC");
        }      
      
     }
    
    return(
        <BugunDoganMezunlarContext.Provider value={{mezunlar,MezunFilter,Mezunsorting}}>{props.children}</BugunDoganMezunlarContext.Provider>
    )
}
export default BugunDoganMezunlarContextProvider;