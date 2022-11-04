import React from 'react';
import './Mezun.css';
import MezunlarList from './MezunlarList';
import MezunlarContextProvider from '../../../Contexts/MezunlarContext';
function Mezunlar() {
  return (
   <MezunlarContextProvider>
          <MezunlarList/>
   </MezunlarContextProvider>
    
  )
}

export default Mezunlar
