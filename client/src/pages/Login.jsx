import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "./Footer";
import login from '/image/login.png'


export const Login = () => {

  const navigate = useNavigate();
  const {storeTokenInLocalStorage} = useAuth();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredential({
      ...credential,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(credential);
    try {
      // const response = await fetch('http://localhost:5000/api/auth/login',{
      const response = await fetch(`${window.location.origin}/api/auth/login`,{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json' 
        },
        body: JSON.stringify(credential)
      })
      const res_data = await response.json();

      if(response.ok){
        toast.success("login successful")
        // alert("login successful")
        
        // localStorage.setItem("token",res_data.token);
        storeTokenInLocalStorage(res_data.token);
        
        setCredential({
          email: "",
          password: "",
        })
        navigate('/');
        // window.location.reload();
        
      }
      else{
        toast.error(res_data.extraDetail ? res_data.extraDetail : res_data.message);
      }
      console.log(response);
    } catch (error) {
      console.log("login",error);
      
    }
  };

  return (
    <>
      <main className="login-page">
        <div className="login-heading">
          <h1>Login Page</h1>
        </div>
        <div className="login-page">
          <div className="login container grid grid-two-col login-container">
            {/* contact image section  */}
            <div className="login-img">
              <img src={login} alt="Me" width="300" height="300" />
            </div>

            <section className=" login-form">
              <form action="" onSubmit={handleSubmit}>
                <div className="login-input">
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    // placeholder="please enter your email"
                    autoComplete="off"
                    value={credential.email}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="login-input">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    // placeholder="please enter your email"
                    autoComplete="off"
                    value={credential.password}
                    onChange={handleOnChange}
                  />
                </div>
                <div>
                  <button>Log In</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <Footer/>
       
      </main>
    </>
  );
};
