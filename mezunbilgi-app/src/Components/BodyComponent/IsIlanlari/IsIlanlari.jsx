import React from 'react';
import "./IsIlanlari.css";
import IsIlanlariList from './IsIlanlariList';
import IsIlanlariContextProvider from '../../../Contexts/IsIlanlariContext';

function IsIlanlari() {
  return (
 
  
    
      
        <IsIlanlariContextProvider>
        <IsIlanlariList/>
        </IsIlanlariContextProvider>
       

   
 
  )
}

export default IsIlanlari