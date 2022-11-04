import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const KategorilerContext=createContext();

const KategorilerContextProvider=(props)=>{
    const [kategoriler,setKategoriler]= useState(
        [
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'},
            {id:uuidv4(), kategoriTurkce:'Genel Bilgiler', kategoriIngilizce:'General Information'}
        ]
    );

    const KategoriEkle=(kategoriTurkce,kategoriIngilizce)=>{
        setKategoriler([...kategoriler,{
            id:uuidv4(),kategoriTurkce,kategoriIngilizce
        }])
    }
    const KategoriSil=(id)=>{
        setKategoriler(kategoriler.filter(kategori=>kategori.id !== id))
    }
    const KategoriDuzenle=(id,kategoriDuzenle)=>{
        setKategoriler(kategoriler.map((kategori)=>(kategori.id===id ? kategoriDuzenle : kategori)))
    }
    return(
        <KategorilerContext.Provider value={{kategoriler,KategoriEkle,KategoriSil,KategoriDuzenle}}>{props.children}</KategorilerContext.Provider>
    )
}
export default KategorilerContextProvider;