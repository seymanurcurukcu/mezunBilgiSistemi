import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [19771,296,3124,907,250,2961,1602,2369,697,4513,1218,121,1710],
        options: {
          chart: {
            width: 300,
            type: 'pie',
          },
          labels: ['Mezun', 'Adalet Meslek Yüksekokulu', 'Meslek Yüksekokulu', 'Sağlık Hizmetleri Meslek Yüksekokulu', 'Uygulamalı Yönetim Bilimleri Yüksekokulu','Mühendislik Fakültesi','Fen Edebiyat Fakültesi','Güzel Sanatlar ve Tasarım Fakültesi','Hukuk Fakültesi','İşletme Fakültesi','İletişim Fakültesi','Sağlık Bilimleri Fakültesi','Lisansüstü Eğitim Enstitüsü'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart series={this.state.series} options={this.state.options}  type="pie" width={670} />
</div>


      );
    }
  }
  export default ApexChart;