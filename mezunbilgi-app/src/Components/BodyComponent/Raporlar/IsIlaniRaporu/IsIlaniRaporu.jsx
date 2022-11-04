import React from 'react';
import IsIlaniRaporList from './IsIlaniRaporList';
import IsIlaniRaporuContextProvider from '../../../../Contexts/IsIlaniRaporuContext';
function IsIlaniRaporu() {
  return (
    <IsIlaniRaporuContextProvider>
      <IsIlaniRaporList/>
    </IsIlaniRaporuContextProvider>
  )
}

export default IsIlaniRaporu