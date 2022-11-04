import React, { Component } from 'react';
import KategoriList from './KategoriList';
import KategorilerContextProvider from '../../../../Contexts/KategorilerContext';
export class Kategoriler extends Component {
  render() {
    return (

     <KategorilerContextProvider>
     <KategoriList/>
     </KategorilerContextProvider>
         
       

    )
  }
}

export default Kategoriler