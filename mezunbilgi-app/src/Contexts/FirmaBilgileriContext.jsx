import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import logo from '../logo/SİSKON.jpg'
export const FirmaBilgileriContext=createContext();

const FirmaBilgileriContextProvider=(props)=>{
    const [firma,setFirma]= useState(
        [
            {id:uuidv4(),firmaLogo:logo,firmaAdi:'Siskon Yazılım Firması',firmaAdresi:'izmir mithat paşa mah. Konak', firmaTelefon:'023245614',firmaWebAdresi:'www.siskonyazilim.com',faliyetAlani:'Bilişim/Telekom',firmaKisaTanitimi:' Hi I m Johnathn Deo,has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',irtibatKisisi:'yasemin demir',irtibatKisisiGorevi:'Halkla İlişkiler Müdürü',irtibatKisisiTelefon:'05324567896',irtibatKisisiEposta:'yasemindenir@gmail.com'},
        ]
    );
    const FirmaBilgileriniGuncelle=(id,FirmaBilgileriDuzenle)=>{
        setFirma(firma.map((Firma)=>(Firma.id===id ? FirmaBilgileriDuzenle : Firma)))
    }

    return(
        <FirmaBilgileriContext.Provider value={{firma,FirmaBilgileriniGuncelle}}>{props.children}</FirmaBilgileriContext.Provider>
    )
}
export default FirmaBilgileriContextProvider;