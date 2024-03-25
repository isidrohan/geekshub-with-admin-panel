import React , {useState} from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import contactImage from '/image/call-centre.png';

export const Contacts = () => {

  const {user,isLoggedIn} = useAuth();
  const [contact, setContact] = useState({
    username : "",
    email: "",
    message:""
  })

  const [userData, setUserData] = useState(true);
  if(user && userData ){
    setContact({
      username:user.username,
      email:user.email,
      message: "",
    })
    setUserData(false);
  }


  const handleOnchange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value
    })
  }


  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(contact);

    try {
      // const response = await fetch('http://localhost:5000/api/contact/contact',{
      const response = await fetch(`${window.location.origin}/api/contact/contact`,{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(contact)
      });
      console.log("contact",response);
      if(response.ok){
        // window.location.reload();
        toast.success("Message Sent Successfully");
        const contact_data = await response.json();
        console.log("contact_data response ",contact_data);
        setContact({
          ...contact,
          message: ""
        })
      }
      else{
        toast.error("message not sent successfully");
      
      }  
    } catch (error) {
      console.log('contact',error);
    }
  }
  return (<>
    <main>
      <div className="contact-heading">
        <h1>Contact us</h1>
      </div>
      <div className="contact-page">
        <div className="contact container grid grid-two-col ">
          {/* contact image section  */}
          <div className="contact-img">
            <img
              src={contactImage}
              alt="Me"
              width="400"
              height="400"
            />
          </div>

          {/* contact content  */}
          <section className="section-form">
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" value={contact.username} onChange={handleOnchange}  />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" value={contact.email} onChange={handleOnchange} />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" cols="50" rows="4" value={contact.message} onChange={handleOnchange}></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28840.07367987048!2d86.45280077811202!3d25.37100781034354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1eee66aa3ebc7%3A0x1bcf4fdc391adc06!2sMunger%2C%20Bihar%20811201!5e0!3m2!1sen!2sin!4v1705688792608!5m2!1sen!2sin" width="100%" height="450" allowFullScreen={true} loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  
  </>);
};
