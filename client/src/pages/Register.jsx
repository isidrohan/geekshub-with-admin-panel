import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Footer } from "./Footer";
import contactImage from '/image/call-centre.png';

export const Register = () => {
  
  const navigate = useNavigate();
  const {storeTokenInLocalStorage} = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  

  const handleOnchange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // submit the form
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);

    try {
      // const response = await fetch(`http://localhost:5000/api/auth/register`,{
      const response = await fetch(`${window.location.origin}/api/auth/register`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      });

      const res_data = await response.json();
      console.log("response from server",res_data.extraDetail);

      if(response.ok){
        // localStorage.setItem("token",res_data.token);
        toast.success("Account created successfully")
        storeTokenInLocalStorage(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        })
        navigate('/')
      }
      else{
        toast.error(res_data.extraDetail ? res_data.extraDetail : res_data.message);
      }
      console.log(response);
    }
    catch (error) {
      console.log("register", error);    
    }
  };
  return (
    <>
      <main className="register-height">
        <div className="contact-heading">
          <h1>Register Page</h1>
        </div>
        <div className="register-page contact-page">
          <div className="register container grid grid-two-col register-container">
            {/* contact image section  */}
            <div className="register-img">
              <img
                src={contactImage}
                alt="Me"
                width="400"
                height="400"
              />
            </div>
            <section className="section-form">
              <form action="" onSubmit={handleSubmit}>
                <div className="register-input">
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    value={user.username}
                    onChange={handleOnchange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="register-input">
                  <label htmlFor="email">email: </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={user.email}
                    onChange={handleOnchange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="register-input">
                  <label htmlFor="phone">phone: </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                    value={user.phone}
                    onChange={handleOnchange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="register-input">
                  <label htmlFor="password">password: </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={user.password}
                    onChange={handleOnchange}
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                <button>submit</button>
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
