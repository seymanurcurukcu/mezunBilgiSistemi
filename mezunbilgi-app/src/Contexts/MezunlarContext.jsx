import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const MezunlarContext=createContext();

const MezunlarContextProvider=(props)=>{
    const [mezunlar]= useState(						 			
        [
            {id:uuidv4(),isim:'Selen',soyIsim:'Şener',tarih:'2019',bolum:'mezun.ieu.edu.tr',kisaAciklama:'Açıklamaa',aciklama:'Açıklamaa' },
            {id:uuidv4(),isim:'Naciye',soyIsim:'Şekerci',tarih:'2008',bolum:'mezun.ieu.edu.tr',kisaAciklama:'Açıklamaa',aciklama:'Açıklamaa' },
           
        ]
    );

    const [mezunlari,setMezunlari]= useState(mezunlar)

    

   const Mezunfilter = (Isim,SoyIsim,Tarih,Bolum) => {
        const itemsUpdate = mezunlar.filter(item => {
          var isim=item.isim.toLowerCase().indexOf(Isim.toLowerCase())!== -1;
          var soyIsim=item.soyIsim.toLowerCase().indexOf(SoyIsim.toLowerCase())!== -1;
          var tarih=item.tarih.toLowerCase().indexOf(Tarih.toLowerCase())!== -1;
          var bolum=item.bolum.toLowerCase().indexOf(Bolum.toLowerCase())!== -1;
        

          return isim && soyIsim && tarih && bolum;
        });
        setMezunlari(itemsUpdate);
      
      };


      
     const [order,setOrder]=useState("ASC")
     const Mezunsorting=(col)=>{
        if(order === "ASC"){
                const sorted=[...mezunlari].sort((a,b)=>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setMezunlari(sorted);
            setOrder("DSC");
        }
        if(order === "DSC"){
            const sorted=[...mezunlari].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setMezunlari(sorted);
        setOrder("ASC");
       }      
     
    }



    const MezunEkle=(isim,soyIsim,tarih,bolum,kisaAciklama,aciklama)=>{
        setMezunlari([...mezunlari,{
            id:uuidv4(),isim,soyIsim,tarih,bolum,kisaAciklama,aciklama
        }])
    }
  
      const Mezunsil=(id)=>{
        setMezunlari(mezunlari.filter(mezun=>mezun.id !==id))
    }
    const MezunDuzenle=(id,mezunDuzenle)=>{
        setMezunlari(mezunlari.map((mezun)=>(mezun.id===id ? mezunDuzenle : mezun)))
    }
    return(
        <MezunlarContext.Provider value={{mezunlari,MezunEkle,Mezunsil,MezunDuzenle,Mezunsorting,Mezunfilter}}>{props.children}</MezunlarContext.Provider>
    )
}
export default MezunlarContextProvider;