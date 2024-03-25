import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const { authenticationToken } = useAuth();
  const [user, setUser] = useState([]);

  const getAllUsersData = async () => {
    try {
      // const response = await fetch("http://localhost:5000/api/admin/users", {
      const response = await fetch(`${window.location.origin}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authenticationToken,
        },
      });
      const data = await response.json();
      console.log("all user form admin user panel",data);
      setUser(data);
    } catch (error) {
      console.log("error while fetching all user in admin panel", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  // function for delete button 
  const deleteUser =  async(id)=>{
    try {
      // const response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`, {
      const response = await fetch(`${window.location.origin}/api/admin/user/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authenticationToken,
        },
      });
      const data = await response.json();
      if(response.ok){
        getAllUsersData();
      }
      console.log("user after deletion",data);
    } catch (error) {
      console.log("error while DELETEING user in admin panel", error);
    }
  }

  return (
    <>
      <section>
        <div className="admin-user-heading container">
          <h1>Admin user data</h1>
        </div>
        <div className="admin-user ">
          <table>
            <div className="table-container">
              <thead className="thead">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>IsAdmin</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {user && user.map((currUser,index) => {
                  return (
                    <tr key={index}>
                      <td>{currUser.username}</td>
                      <td>{currUser.email}</td>
                      <td>{currUser.phone}</td>
                      <td>{String(currUser.isAdmin)}</td>
                      <td><Link to={`/admin/users/edit/${currUser._id}`}>Edit</Link></td>
                      <td><button onClick={()=>{deleteUser(currUser._id)}}>delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </div>
          </table>
        </div>
      </section>
    </>
  );
};
