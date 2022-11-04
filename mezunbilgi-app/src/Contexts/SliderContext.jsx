import { createContext,useState } from "react";

import resim from "../logo/Haber2.jpg";
export const SliderContext=createContext();

const SliderContextProvider=(props)=>{
    const [haberler]= useState(
        [
            {image:resim, heading:'Maaş Promosyonu ihalesi', desc:'İnönü Üniversitesi çalışanlarının maaşları için banka tarafından verilen promosyon tutarının arttırılması için çaba gösteriliyor. 36 aylık süreyi içeren yeni promosyon ve maaş sözleşmesi için 26 Eylül 2022 tarihinde ihaleye çıkılacak.'},
            {image:resim, heading:'Maaş Promosyonu ihalesi', desc:'İnönü Üniversitesi çalışanlarının maaşları için banka tarafından verilen promosyon tutarının arttırılması için çaba gösteriliyor. 36 aylık süreyi içeren yeni promosyon ve maaş sözleşmesi için 26 Eylül 2022 tarihinde ihaleye çıkılacak.'},
            {image:resim, heading:'Maaş Promosyonu ihalesi', desc:'İnönü Üniversitesi çalışanlarının maaşları için banka tarafından verilen promosyon tutarının arttırılması için çaba gösteriliyor. 36 aylık süreyi içeren yeni promosyon ve maaş sözleşmesi için 26 Eylül 2022 tarihinde ihaleye çıkılacak.'},
            {image:resim, heading:'Maaş Promosyonu ihalesi', desc:'İnönü Üniversitesi çalışanlarının maaşları için banka tarafından verilen promosyon tutarının arttırılması için çaba gösteriliyor. 36 aylık süreyi içeren yeni promosyon ve maaş sözleşmesi için 26 Eylül 2022 tarihinde ihaleye çıkılacak.'},
            {image:resim, heading:'Maaş Promosyonu ihalesi', desc:'İnönü Üniversitesi çalışanlarının maaşları için banka tarafından verilen promosyon tutarının arttırılması için çaba gösteriliyor. 36 aylık süreyi içeren yeni promosyon ve maaş sözleşmesi için 26 Eylül 2022 tarihinde ihaleye çıkılacak.'},
            {image:resim, heading:'Maaş Promosyonu ihalesi', desc:'İnönü Üniversitesi çalışanlarının maaşları için banka tarafından verilen promosyon tutarının arttırılması için çaba gösteriliyor. 36 aylık süreyi içeren yeni promosyon ve maaş sözleşmesi için 26 Eylül 2022 tarihinde ihaleye çıkılacak.'}
        ]
    );

    
    return(
        <SliderContext.Provider value={{haberler}}>{props.children}</SliderContext.Provider>
    )
}
export default SliderContextProvider;