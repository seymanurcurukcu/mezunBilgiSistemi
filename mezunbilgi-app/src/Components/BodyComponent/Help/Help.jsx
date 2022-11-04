import React from 'react'
import './Help.css'


function Help() {
  return (
<div className="container-xl">
 <div className="table-responsive">
   <div className="table-wrapper">
     <div className="table-title">
       <div className="row">
         <div className="col-sm-5">
           <h2>Help</h2>
         </div> 
       </div>
     </div>
   
     <ul className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-toggle="tab" href="#moduller">Modüller</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#modules" >Modules</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#Kullanicilar">Kullanıcılar</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#Users">Users</a>
    </li>
  </ul>
  <div className="tab-content">
    <div id="moduller" className="container tab-pane active">
      <h4 style={{marginTop:"15px"}}>Yeni İş İlanı Girme</h4>
        <ul>
          <li>Ana Sayfadan “İş İlanları” kısmını seçiniz.</li>
          <li>Açılan sayfadan “Yeni İlan Girişi” kısmını seçiniz.</li>
          <li>İş ilanı ile ilgili gerekli alanları doldurunuz.</li>
          <li>Aranan pozisyon adı liste içindekiler içerisinde yer almıyorsa “Diğer” seçeneğini seçin, açılan kutuya aradığınız pozisyonun adını yazınız.</li>
          <li>Firma bilgilerini girerken firma logosu yüklemediyseniz sayfanın en altında yer alan “Logo Yükle” kısmına firmanızın logosunu yükleyiniz (logonun jpg, jpeg veya png formatında olması gerekmektedir).</li>
          <li>Tüm bilgileri girdikten sonra tamamlamak için sayfanın en alt sağ köşesinde bulunan “Kaydet” butonuna tıklayınız.</li>
          <li>Hazırladığınız ilan sistem moderatörü tarafından onaylandıktan sonra sistemde mezunların görebileceği şekilde yayınlanacaktır.</li>
        </ul>
        <h4 style={{marginTop:"15px"}}>İş İlanı Düzenleme</h4>
        <ul>
          <li>Ana Sayfadan “İş İlanları” kısmını seçiniz.</li>
          <li>Açılan sayfadan “İş İlanlarım” kısmını seçiniz.</li>
          <li>Açılan ekranda girdiğiniz tüm ilanları liste halinde göreceksiniz.</li>
          <li>Üzerinde ilan yayın tarihi, görev tanımı v.b konularda değişiklik yapmak istediğiniz ilanın bulunduğu satırın en sağında yer alan “Düzenle” kısmını seçiniz.</li>
          <li>Açılan ekranda gerekli değişiklikleri yaptıktan sonra sayfanın en alt sağ köşesinde yer alan “Kaydet” butonunu tıklayınız.</li>
          <li>Yaptığınız değişiklikler sistem moderatörü tarafından onaylandıktan sonra ilanınız yeniden yayına alınacaktır.</li>

        </ul>

        <h4 style={{marginTop:"15px"}}>İzmir Ekonomi Üniversitesi Mezun CV’si Tarama</h4>
        <ul>
          <li>Ana Sayfadan “Cv Arama / CV Bankası” kısmını seçiniz.</li>
          <li>Açılan ekranda aradığınız kriterleri seçiniz.</li>
          <li>Kriterleri seçtikten sonra sayfanın sağ alt köşesinde bulunan “Ara” butonuna tıklayınız.</li>
          <li>Aradığınız kriterlere uygun sistemde özgeçmiş bulunan mezunlar sayfanın altında listelenecektir.</li>
          <li>Listeden ilgilendiğiniz mezunun özgeçmişine satırların en sağında bulunan “CV’ye ulaşmak için tıklayınız” kısmını seçtiğinizde ilgilendiğiniz özgeçmiş karşınıza çıkacaktır.</li>
        </ul>




     </div>
    <div id="modules" className="container tab-pane fade">
      <h4 style={{marginTop:"15px"}}>Entering a New Job Vacancy</h4>
      <ul>
        <li>Please click on “Job Vacancies” section on the homepage.</li>
        <li>Click on “New Job Vacancy” section.</li>
        <li>Fill in the required parts regarding job vacancy.</li>
        <li>If the list doesn’t include your position, click on “Other “option and type in the position you are looking for.</li>
       <li>If you haven’t uploaded a company logo while entering company information, click on “Upload a Logo” section at the bottom of the page and upload your company logo (make sure your logo is in jpg, jpeg, or png format).</li>
       <li>Click on “Save” button at the lower right hand corner of the page after entering all the information.</li>
       <li>The job vacancy you posted will be available in the system to all alumni upon the approval of the system moderator.</li>
      </ul>

      <h4 style={{marginTop:"15px"}}>Editing Job Vacancies</h4>
      <ul>
        <li>Please click on “Job Vacancies” section on the homepage.</li>
        <li>Click on “My Job Vacancies”.</li>
        <li>You will be able to see all job vacancies in a list.</li>
        <li>Click on “Edit “section in the far right of the job vacancy you want to make changes such as posting date, job description, etc.</li>
         <li>Click on “Save” button at the lower right hand corner of the page after completing the necessary changes.</li>
      <li>The job vacancy you made changes on will be available in the system again upon the approval of the system moderator.</li>
      </ul>

      <h4 style={{marginTop:"15px"}}>Browsing for a CV of Izmir University of Economics Graduate</h4>
      <ul>
        <li>Please click on “CV Search / CV Bank” section on the homepage.</li>
        <li>Select the criteria on the page opened.</li>
        <li>Click on “Search” button on the lower right hand corner of the page after selecting the criteria.</li>
        <li>You will see the list of CV’s based on your criteria.</li>
        <li>You will be able to have Access to the CV you are interested in when you select “Click to access CV” section in the far right of the line.</li>
     </ul>
    </div>



    <div id="Kullanicilar" className="container tab-pane fade">
       <h4 style={{marginTop:"15px"}}>E-posta Güncelleme</h4>
        <ul>
            <li>Şifre güncellemek için ekranın sağ üst köşesinde bulunan Firmanızın kullanıcı ismine tıklayınız.</li>
            <li>Açılan ekranda “Yeni Şifre” kısmına kullanmak istediğiniz yeni şifrenizi giriniz.</li>
            <li>Aynı ekranda 2. satırda bulunan “Yeni Şifre (Tekrar)” kısmına belirlediğiniz şifreyi tekrar giriniz.</li>
            <li>“Güncelle” butonuna tıklayınız.</li>
        </ul>
        <h4 style={{marginTop:"15px"}}>Şifre Güncelleme</h4>
        <ul>
            <li>E-posta güncellemek için ekranın sağ üst köşesinde bulunan Firmanızın kullanıcı ismine tıklayınız.</li>
            <li>Açılan ekranda “Yeni E-posta” kısmına kullanmak istediğiniz yeni e-postanızı giriniz.</li>
            <li>Aynı kısımda 2. satırda bulunan “Yeni E-posta (Tekrar)” kısmına belirlediğiniz kullanmak istediğiniz yeni e-posta adresinizi tekrar giriniz.</li>
            <li>“Güncelle” butonuna tıklayınız.</li>
        </ul>
        <h4 style={{marginTop:"15px"}}>Firma Bilgileri Güncelleme</h4>
        <ul>
            <li>Firma Bilgileri kısmı için ana sayfada “Firma Bilgileri” kısmını seçiniz.</li>
            <li>Açılan ekranda güncellemek istediğiniz bilgi veya bilgileri ilgili satıra eskisinin yerine yazınız.</li>
            <li>Sayfanın en altında yer alan “Düzenle” butonuna tıklayınız.</li>
            <li>Telefon numaralarını yazarken aralarında boşluk olmamasına dikkat ediniz.</li>
        </ul>
    </div>


    <div id="Users" className="container tab-pane fade">
    <h4 style={{marginTop:"15px"}}>Updating Password</h4>
        <ul>
            <li>Please click on your company user name on the upper right hand corner of the screen in order to update your password.</li>
            <li>Enter the new password you want to use in the “New Password” section on the screen.</li>
            <li>Reenter your new password in the second line where it says “New Password (Again)”.</li>
            <li>Click on “Update” button.</li>
        </ul>
        <h4 style={{marginTop:"15px"}}>Updating E-mail</h4>
        <ul>
            <li>Please click on your company user name on the upper right hand corner of the screen in order to update your e-mail.</li>
            <li>Enter the new e-mail you want to use in the “New E-mail” section on the screen.</li>
            <li>Reenter your new e-mail in the second line where it says “New E-mail (Again)”.</li>
            <li>Click on “Update” button.</li>
        </ul>
        <h4 style={{marginTop:"15px"}}>Updating Company Information</h4>
        <ul>
            <li>Please click on “Company Information” section on the homepage to update company information.</li>
            <li>Enter the new information you want to update on the screen.</li>
            <li>Click on “Edit” button at the bottom of the page.</li>
            <li>Please make sure not to leave spaces between the digits when entering the phone numbers.</li>
        </ul>
      </div>
  
</div>
   </div>
 </div>
</div>
  )
}

export default Help