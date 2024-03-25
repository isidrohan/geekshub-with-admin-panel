import React from 'react'
import { useState,useEffect } from 'react';
import { Service_card } from './Service_card';
import { Footer } from './Footer';

export const Service = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    serviceData();
  }, [])

  const serviceData = async()=>{
    try {
      // const response = await fetch("http://localhost:5000/api/services/services",{
      const response = await fetch(`${window.location.origin}/api/services/services`,{
        method: 'GET',
        headers:{
          "Content-Type": "application/json"
        }
      })
      console.log("service response",response);
      if(response.ok){
        const data =  await response.json();
        setData(data);
        console.log("service data response after ok",data)
      }
    } catch (error) {
      console.log("service",error);
    }

  }
  
  return (
    <section>
      <div className='service container grid grid-three-col'>
        {
          data.map((item)=>{
            return <Service_card key={item._id} item={item}/>;
          })
        }
      </div>
      <Footer/>
    </section>
  )
}
