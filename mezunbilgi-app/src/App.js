import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react'
import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import LoginPage from "./Components/LoginComponent/Login";
import ForgotPassword from "./Components/LoginComponent/ForgotPassword";
import Logout from "./Components/LoginComponent/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const adminUser = {
    kullaniciAdi: "deneme",
    sifre: "123"
  }

  const [user, setUser] = useState({ kullaniciAdi: "", sifre: "" });
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details)
    if (details.kullaniciAdi == adminUser.kullaniciAdi && details.sifre == adminUser.sifre) {
      console.log("başarılı");
      setUser({
        kullaniciAdi: details.kullaniciAdi,
        sifre: details.sifre
      });
    } else {
      console.log("başarısız");
    }
  }
  const Logout = () => {
    console.log("Logout");
  }
  return (
    <>



    {(user.kullaniciAdi != "") ? (
      <BrowserRouter>
      <HeaderComponent />;
    
    </BrowserRouter>
    ) : (
      <BrowserRouter>
      <Route path="/" exact render={()=>(
        <React.Fragment>
        
            <LoginPage Login={Login} error={error} />
          
      </React.Fragment>
    )}>

   </Route> 
   <Route path="/forgotpassword" exact render={()=>(
        <React.Fragment>
        
            <ForgotPassword/>
          
      </React.Fragment>
    )}>

   </Route> 
  
   </BrowserRouter>
      

    )}
  </>
    
  );
}

export default App;
