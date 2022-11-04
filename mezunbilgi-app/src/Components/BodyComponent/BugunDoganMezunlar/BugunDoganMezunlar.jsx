import React from 'react'
import "../mezun.css"
import BugunDoganMezunList from './BugunDoganMezunList';

import BugunDoganMezunlarContextProvider from '../../../Contexts/BugunDoganMezunlarContext'
class BugunDoganMezunlar extends React.Component  {
 render(){
  return (
    
    


   
        <BugunDoganMezunlarContextProvider>
        <BugunDoganMezunList/>
        </BugunDoganMezunlarContextProvider>
         
       
        

  


  )
 }
}

export default BugunDoganMezunlar