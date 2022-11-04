import React from 'react'
import FirmaRaporuList from './FirmaRaporuList';
import FirmaRaporuContextProvider from '../../../../Contexts/FirmaRaporuContext';

function FirmaRaporu() {
  return (
    <FirmaRaporuContextProvider>
    <FirmaRaporuList/>
    </FirmaRaporuContextProvider>
  )
}

export default FirmaRaporu