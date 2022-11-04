import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const HaberlerContext=createContext();

const HaberlerContextProvider=(props)=>{
  
    const [haberler]= useState(
        [
            {id:uuidv4(), haberBasligi:'RÜYALAR TASARIMLA CANLANIYOR', kisaAciklamasi:"İzmir Ekonomili Hande Arı, Türkiye’nin ilk 10’unda",haberDevami:'İzmir Ekonomili İnan, Avrupa’nın gözdesi oldu', tarih:'31.08.2013', gonderen:'yonetim.ieu.edu.tr', anasayfa:'Aktif', durum:'Aktif'},
            {id:uuidv4(), haberBasligi:'ALAÇATI, İEÜ’LÜ ŞEFLERLE LEZZETLENDİ', kisaAciklamasi:"İzmir Ekonomili Hande Arı, Türkiye’nin ilk 10’unda", haberDevami:'İzmir Ekonomili İnan, Avrupa’nın gözdesi oldu', tarih:'31.07.2013', gonderen:'yonetim.ieu.edu.tr', anasayfa:'pasif', durum:'pasif'},
        ]
    );
    const [haber,setHaber]= useState(haberler);

    const Haberfilter = (HaberBasligi,Tarih,Gonderen,Anasayfa,Durum) => {
        const itemsUpdate = haberler.filter(item => {
          var haberBasligi=item.haberBasligi.toLowerCase().indexOf(HaberBasligi.toLowerCase())!== -1;
          var tarih=item.tarih.toLowerCase().indexOf(Tarih.toLowerCase())!== -1;
          var gonderen=item.gonderen.toLowerCase().indexOf(Gonderen.toLowerCase())!== -1;
          var anasayfa = item.anasayfa.toLowerCase().indexOf(Anasayfa.toLowerCase())!== -1;
          var durum=item.durum.toLowerCase().indexOf(Durum.toLowerCase())!== -1;
 
          return haberBasligi && tarih && gonderen && anasayfa && durum;
        });
        setHaber(itemsUpdate);
      
      };

    const [order,setOrder]=useState("ASC")
    const Haberlersorting=(col)=>{
       if(order === "ASC"){
               const sorted=[...haber].sort((a,b)=>
               a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
           );
           setHaber(sorted);
           setOrder("DSC");
       }
       if(order === "DSC"){
           const sorted=[...haber].sort((a,b)=>
           a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
       );
       setHaber(sorted);
       setOrder("ASC");
      }      
    
   }
   const HaberEkle=(haberBasligi,tarih,gonderen,anasayfa)=>{
    setHaber([...haber,{
        id:uuidv4(),haberBasligi,tarih,gonderen,anasayfa
    }])
}
   const HaberSil=(id)=>{
    setHaber(haber.filter(haberler=>haberler.id !==id))
}

const HaberDuzenle=(id,haberDuzenle)=>{
    setHaber(haberler.map((haber)=>(haber.id===id ? haberDuzenle : haber)))
}
    
    return(
        <HaberlerContext.Provider value={{haber,Haberlersorting,Haberfilter,HaberEkle,HaberSil,HaberDuzenle}}>{props.children}</HaberlerContext.Provider>
    )
}
export default HaberlerContextProvider;