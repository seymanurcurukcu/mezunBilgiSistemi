import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CvAramaContext=createContext();

const CvAramaContextProvider=(props)=>{
    const [cvler]= useState(
        [
            {id:uuidv4(), mezunAdiSoyadi:'Anıl KANIGÜR', bolum:'Yazılım Mühendisliği',mezunOlduguYil:'05.08.2022', calistigiFirma:'Siskon yazılım',calistigiSektor:'Danışmanlık', gorevi:'Acente Eleman', bildigiIkinciYabanciDil:'Almanca',egitimTipi:'doktora' , email:'anil@gmail.com', Ozgecmis:'özgeçmiş',askerlikDurumu:'yaptı',sehir:'izmir',departmani:'Finans',ingilizceAnlama:'iyi',ingilizceYazma:'orta',ingilizceKonusma:'çok iyi'},
            {id:uuidv4(), mezunAdiSoyadi:'Anıl KANIGÜR', bolum:'Bilgisayar Mühendisliği',mezunOlduguYil:'06.08.2022', calistigiFirma:'Eldor yazılım',calistigiSektor:'Eğitim', gorevi:'Acente Müdür Yardımcısı', bildigiIkinciYabanciDil:'Fransızca',egitimTipi:'önlisans' , email:'anil@gmail.com', Ozgecmis:'özgeçmiş',askerlikDurumu:'yapmadı',sehir:'Adana',departmani:'Hizmet',ingilizceAnlama:'orta',ingilizceYazma:'iyi',ingilizceKonusma:'çok iyi'},
           
        ]
    );
    const [cv,setCv]= useState(cvler)
  


    const Cvfilter = (AskerlikDurumu,Bolum,EgitimTipi,BildigiIkinciYabanciDil,Sehir,CalistigiSektor,Departmani,Gorevi,IngilizceAnlama,IngilizceYazma,IngilizceKonusma) => {
        const itemsUpdate = cvler.filter(item => {
          var askerlikDurumu=item.askerlikDurumu.toLowerCase().indexOf(AskerlikDurumu.toLowerCase())!== -1;
          var bolum=item.bolum.toLowerCase().indexOf(Bolum.toLowerCase())!== -1;
          var egitimTipi=item.egitimTipi.toLowerCase().indexOf(EgitimTipi.toLowerCase())!== -1;
          var bildigiIkinciYabanciDil=item.bildigiIkinciYabanciDil.toLowerCase().indexOf(BildigiIkinciYabanciDil.toLowerCase())!== -1;
          var sehir=item.sehir.toLowerCase().indexOf(Sehir.toLowerCase())!== -1;
          var calistigiSektor=item.calistigiSektor.toLowerCase().indexOf(CalistigiSektor.toLowerCase())!== -1;
          var departmani=item.departmani.toLowerCase().indexOf(Departmani.toLowerCase())!== -1;
          var gorevi=item.gorevi.toLowerCase().indexOf(Gorevi.toLowerCase())!== -1;
          var ingilizceAnlama=item.ingilizceAnlama.toLowerCase().indexOf(IngilizceAnlama.toLowerCase())!== -1;
          var ingilizceYazma=item.ingilizceYazma.toLowerCase().indexOf(IngilizceYazma.toLowerCase())!== -1;
          var ingilizceKonusma=item.ingilizceKonusma.toLowerCase().indexOf(IngilizceKonusma.toLowerCase())!== -1;
          return askerlikDurumu && bolum && egitimTipi && bildigiIkinciYabanciDil && sehir && calistigiSektor && departmani && gorevi && ingilizceAnlama && ingilizceYazma && ingilizceKonusma;
        });
        setCv(itemsUpdate);
      
      };


    const [order,setOrder]=useState("ASC")
    const Cvsorting=(col)=>{
       if(order === "ASC"){
               const sorted=[...cv].sort((a,b)=>
               a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
           );
           setCv(sorted);
           setOrder("DSC");
       }
       if(order === "DSC"){
           const sorted=[...cv].sort((a,b)=>
           a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
       );
       setCv(sorted);
       setOrder("ASC");
      }      
    
   }

    return(
        <CvAramaContext.Provider value={{cv,Cvsorting,Cvfilter}}>{props.children}</CvAramaContext.Provider>
    )
}
export default CvAramaContextProvider;