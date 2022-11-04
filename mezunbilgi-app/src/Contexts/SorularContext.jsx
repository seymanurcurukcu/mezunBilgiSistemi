import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const SorularContext=createContext();

const SorularContextProvider=(props)=>{
    const [sorular,setSorular]= useState(
        [
            {id:uuidv4(),soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(), soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(), soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(),soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(), soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(), soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(),soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(), soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'},
            {id:uuidv4(), soruBasligi:'Belge Taleplerimi nasıl yapabilirim', kategoriler:'Genel Bilgiler'}
        ]
    );
    const SoruEkle=(soruBasligi,kategoriler)=>{
        setSorular([...sorular,{
            id:uuidv4(),soruBasligi,kategoriler
        }])
    }

    const SoruSil=(id)=>{
        setSorular(sorular.filter(soru=>soru.id !==id))
    }

  const SoruDuzenle=(id,soruduzenle)=>{
    setSorular(sorular.map((soru)=>(soru.id===id ? soruduzenle:soru)))
  }
    return(
        <SorularContext.Provider value={{sorular,SoruEkle,SoruSil,SoruDuzenle}}>{props.children}</SorularContext.Provider>
    )
}
export default SorularContextProvider;