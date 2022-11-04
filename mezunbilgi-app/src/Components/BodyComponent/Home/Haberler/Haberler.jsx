import React,{useContext} from 'react';
import Carousel from "react-elastic-carousel";
import "./Haberler.css";
import { SliderContext } from "../../../../Contexts/SliderContext";
import Haber from './Haber';
function Haberler() {
  const {haberler} = useContext(SliderContext);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
  return (
    <>
        <h2 style={{ textAlign: "center"}}>HABERLER</h2>
      <div className="haber">
      
        <Carousel breakPoints={breakPoints}>
             {
              haberler.map((haber,index)=>{
                return(
                  <div className='item' key={index}>
                         <Haber haber={haber}/>
                  </div>
                 
                )
              })
             }
         
         
 
        </Carousel>
      </div>

    </>
  )
}

export default Haberler