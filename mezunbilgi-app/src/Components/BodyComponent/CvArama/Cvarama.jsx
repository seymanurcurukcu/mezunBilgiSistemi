import React from 'react';
import CvList from './CvList';
import './Cv.css';
import CvAramaContextProvider from '../../../Contexts/CvAramaContext';
function Cvarama() {


  return (
 
     <CvAramaContextProvider>
         <CvList/>
    </CvAramaContextProvider>
         
  )
}

export default Cvarama