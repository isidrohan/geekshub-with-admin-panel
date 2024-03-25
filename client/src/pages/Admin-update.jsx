import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";

export const AdminUpdate = ()=>{
  
    const params = useParams();
    console.log("params me kay hai ",params);
    const {authenticationToken} = useAuth()
    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        isAdmin:""
    })

    const getUserById = async()=>{
        try {
            // const respose = await fetch(`http://localhost:5000/api/admin/user/${params.id}`,{
            const respose = await fetch(`${window.location.origin}/api/admin/user/${params.id}`,{
                method: 'GET',
                headers:{
                    Authorization : authenticationToken
                },
            })
    
            console.log(respose);
            if(respose.ok){
                const data = await respose.json();
                console.log(data);
                setUser(data);
            }
        } catch (error) {
            console.log("error in admin update page while fetching single user data",error);
        }
    }

    useEffect(() => {
        getUserById();
      }, [])

      const handleOnchange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
      }

    const handleOnsubmit = async(e) =>{
        e.preventDefault();

        try {
            // const response = await fetch(`http://localhost:5000/api/admin/user/update/${params.id}`,{
            const response = await fetch(`${window.location.origin}/api/admin/user/update/${params.id}`,{
                method: 'PATCH',
                headers : {
                    'Content-Type' : 'application/json' ,
                    Authorization : authenticationToken
                },
                body: JSON.stringify(user)
            })
            if(response.ok){
                toast.success("Updated successfully")
                console.log("respose of updation ",response);
            }

        } catch (error) {
            console.log("Error in updating the user details",error);
        }

    }
    
    return(
        <>
      <main>
        <div className="contact-heading">
          <h1>Update Page</h1>
        </div>
        <div className="contact-page"> {/* contact page name dena pada class ka kyu ki css likha tha already is class name me*/}
          <div className="container grid  register-container">
            
            <section className="section-form">
              <form action="" onSubmit={handleOnsubmit} >
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
                  <label htmlFor="phone">isAdmin: </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                    value={user.isAdmin}
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
      </main>
    </>
    )

}