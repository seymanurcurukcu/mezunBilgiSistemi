import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
export class ApexChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            data: [19771, 296,3124,907,250,2961,1602,2369,697,4513,1218,121,1710]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 700
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Mezun / Graduates', 'Adalet Meslek Yüksekokulu / Vocational School Of Justice', 'Meslek Yüksekokulu / Vocational School', 'Sağlık Hizmetleri Meslek Yüksekokulu / Vocational School Of Health Services', 'Uygulamalı Yönetim Bilimleri Yüksekokulu / School Of Applied Management Sciences', 'Mühendislik Fakültesi / Faculty of Engineering', 'Fen Edebiyat Fakültesi / Faculty of Science and Literature',
                'Güzel Sanatlar ve Tasarım Fakültesi / Faculty of Fine Arts and Design', 'Hukuk Fakültesi / Faculty of Law', 'İşletme Fakültesi / Faculty of Business' ,'İletişim Fakültesi / Faculty of Communication', 'Sağlık Bilimleri Fakültesi / Faculty of Health Sciences','Lisansüstü Eğitim Enstitüsü / Graduate School'
              ],
            }
          },
        
        
        };
      }
  render() {
    return (
        <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={450} />
      </div>
    )
  }
}

export default ApexChart
