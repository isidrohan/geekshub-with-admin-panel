import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";

export const AdminContacts = () => {
  const { authenticationToken } = useAuth();
  const [contactData, setContactData] = useState([]);

  const getAllContacts = async () => {
    try {
      // const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
      const response = await fetch(`${window.location.origin}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authenticationToken,
        },
      });

      console.log(response);
      const data = await response.json();
      if (response.ok) {
        console.log("contact response", data);
        setContactData(data);
      }
    } catch (error) {
      console.log("error while  fetching contacts", error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const handleDeleteClick = async(id)=>{
    try {
        // const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
        const response = await fetch(`${window.location.origin}/api/admin/contacts/delete/${id}`,{
        method:'DELETE',
        headers:{
            Authorization: authenticationToken,
        },
        })

        console.log("constact deleted",response)
        const data = await response.json()
        if(response.ok){
            getAllContacts();
            console.log("contact delete data",data)
        }
    } catch (error) {
        console.log("Error in deleting contact",error)
    }
  }

  return (
    <section>
      <div className="admin-contact container grid grid-three-col">
        {contactData.map((item, index) => {
          return (
              <div key={index} className="contact-box">
                <div className="content">
                  <div className="contact-provider">
                    <p>
                      <b>Username:    </b>
                    </p>
                    <p> {item.username}</p>
                  </div>
                  <div className="contact-provider">
                    <p>
                      <b>Email:</b>
                    </p>
                    <p>{item.email}</p>
                  </div>
                  <div className="contact-provider">
                    <p>
                      <b>Message:</b>
                    </p>
                    <p>{item.message}</p>
                  </div>
                </div>
                <div className="button">
                  <button onClick={()=> {handleDeleteClick(item._id)}}>Delete Contact</button>
                </div>
              </div>
          );
        })}
      </div>
    </section>
  );
};
