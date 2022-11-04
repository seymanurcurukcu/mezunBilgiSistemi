import React, { useState } from 'react';
import logo from "../../logo/inonu-universitesi.png";
import './Login.css';



const Login = ({Login,error}) => {
   
   const [details,setDetails]=useState({kullaniciAdi:"",sifre:""});
   const submitHandler=e=>{
    e.preventDefault();
    Login(details);
   }

    return (
    
        <div className="login">
            <form onSubmit={submitHandler}>
                <div className="login-right">
                    <img className='loginresim'
                        src={logo}
                        alt="Login App"
                    />
                    <h6 style={{marginLeft:"55px"}}>İNÖNÜ ÜNİVERSİTESİ</h6>

                    <label className="form-group">
                        <input type="text" name='kullaniciAdi' onChange={e=>setDetails({...details,kullaniciAdi:e.target.value})} value={details.kullaniciAdi} className="form-control" required />
                        <span>Kullanıcı Adı</span>
                        <span className="border"></span>
                    </label>

                    <label className="form-group">
                        <input type="text" name='sifre' onChange={e=>setDetails({...details,sifre:e.target.value})} value={details.sifre} className="form-control" required />
                        <span>Şifre</span>
                        <span className="border"></span>
                    </label>
               

                    

                    <div className="checkbox login-options">
					<label><input  type="checkbox"/> Remember Me</label>
                   
					<a href="/forgotpassword" className="login-forgot">Forgot Password?</a>
                 
				</div>		
                    <div className="row mb-4">
                        <button id="btn-login">Giriş Yap</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Login;