import React from 'react'
import HaberPaneliList from './HaberPaneliList';
import './HaberPaneli.css';
import HaberlerContextProvider from '../../../Contexts/HaberlerContext';
function HaberPaneli() {
  return (
    
            <HaberlerContextProvider>
                 <HaberPaneliList/>
            </HaberlerContextProvider>
            


   
  )
}

export default HaberPaneli
