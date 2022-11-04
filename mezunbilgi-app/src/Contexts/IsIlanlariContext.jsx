import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const IsIlanlariContext=createContext();

const IsIlanlariContextProvider=(props)=>{
    const [isilanlar]= useState(
        [
            {id:uuidv4(), firmaAdi:'Siskon Yazilim',firmaKisaTanitimi:' Hi I m Johnathn Deo,has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type.', arananPozisyon:'Bilgisayar Mühendisi', ilanYeri:'Yurt içi', pozisyonTipi:'Tam Zamanli', ilanTipi:'yazilim', email:'deneme@gmail.com',firmaIletisimBilgileri:'siskon@gmail.com',anahtarKelimeler:'anahtar kelime', IlaninBaslamaTarihi:'2022.08.03', sonYayinTarihi:'2022.09.01',ilanReferansNo:'1024',durum:'Aktif'},
            {id:uuidv4(), firmaAdi:'Siskon Yazilim',firmaKisaTanitimi:' Hi I m Johnathn Deo,has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type.', arananPozisyon:'Bilgisayar Mühendisi', ilanYeri:'Yurt içi', pozisyonTipi:'Tam Zamanli', ilanTipi:'yazilim', email:'siskon@gmail.com',firmaIletisimBilgileri:'siskon@gmail.com',anahtarKelimeler:'anahtar kelime', IlaninBaslamaTarihi:'2022.08.03', sonYayinTarihi:'2022.09.03',ilanReferansNo:'1024',durum:'Aktif'},
            {id:uuidv4(), firmaAdi:'Siskon Yazilim',firmaKisaTanitimi:' Hi I m Johnathn Deo,has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type.', arananPozisyon:'Bilgisayar Mühendisi', ilanYeri:'Yurt içi', pozisyonTipi:'Tam Zamanli', ilanTipi:'yazilim', email:'siskon@gmail.com',firmaIletisimBilgileri:'siskon@gmail.com',anahtarKelimeler:'anahtar kelime', IlaninBaslamaTarihi:'2022.08.03', sonYayinTarihi:'2022.09.03',ilanReferansNo:'1024',durum:'Aktif'}
        ]
    );

    const [isilanlari,setIsilanlari]= useState(isilanlar)

    

   const filterList = (FirmaAdi,ArananPozisyon,PozisyonTipi,Durum,Email,SonYayinTarihi) => {
        const itemsUpdate = isilanlar.filter(item => {
          var firmaAdi=item.firmaAdi.toLowerCase().indexOf(FirmaAdi.toLowerCase())!== -1;
          var arananPozisyon=item.arananPozisyon.toLowerCase().indexOf(ArananPozisyon.toLowerCase())!== -1;
          var pozisyonTipi=item.pozisyonTipi.toLowerCase().indexOf(PozisyonTipi.toLowerCase())!== -1;
          var durum=item.durum.toLowerCase().indexOf(Durum.toLowerCase())!== -1;
          var email = item.email.toLowerCase().indexOf(Email.toLowerCase())!== -1;
          var sonYayinTarihi = item.sonYayinTarihi.toLowerCase().indexOf(SonYayinTarihi.toLowerCase()) !== -1;
          return firmaAdi && arananPozisyon && pozisyonTipi && durum && email && sonYayinTarihi;
        });
        setIsilanlari(itemsUpdate);
      
      };


      
     const [order,setOrder]=useState("ASC")
     const IsIlanisorting=(col)=>{
        if(order === "ASC"){
                const sorted=[...isilanlari].sort((a,b)=>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setIsilanlari(sorted);
            setOrder("DSC");
        }
        if(order === "DSC"){
            const sorted=[...isilanlari].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setIsilanlari(sorted);
        setOrder("ASC");
       }      
     
    }



    const IsIlaniEkle=(firmaAdi,firmaKisaTanitimi,arananPozisyon,ilanYeri,pozisyonTipi,ilanTipi,email,firmaIletisimBilgileri,anahtarKelimeler,
        IlaninBaslamaTarihi,sonYayinTarihi,ilanReferansNo,durum)=>{
        setIsilanlari([...isilanlari,{
            id:uuidv4(),firmaAdi,firmaKisaTanitimi,arananPozisyon,ilanYeri,pozisyonTipi,ilanTipi,email,firmaIletisimBilgileri,anahtarKelimeler,
            IlaninBaslamaTarihi,sonYayinTarihi,ilanReferansNo,durum
        }])
    }
  
      const IsYeriSil=(id)=>{
        setIsilanlari(isilanlari.filter(IsIlani=>IsIlani.id !==id))
    }
    const IsYeriDuzenle=(id,isyeriDuzenle)=>{
        setIsilanlari(isilanlari.map((isilani)=>(isilani.id===id ? isyeriDuzenle : isilani)))
    }
    return(
        <IsIlanlariContext.Provider value={{isilanlari,IsIlaniEkle,IsYeriSil,IsYeriDuzenle,IsIlanisorting,filterList}}>{props.children}</IsIlanlariContext.Provider>
    )
}
export default IsIlanlariContextProvider;