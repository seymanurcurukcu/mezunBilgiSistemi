import React, { Component } from 'react'
import SoruList from './SoruList'
import SorularContextProvider from '../../../../Contexts/SorularContext';
export class Sorular extends Component {
  render() {
    return (
   
 
  
  
     <SorularContextProvider>
     <SoruList/>
     </SorularContextProvider>
       
      

   

    )
  }
}

export default Sorular