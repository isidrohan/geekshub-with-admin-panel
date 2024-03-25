import { useState } from "react";
import { NavLink ,Navigate,Outlet} from "react-router-dom"
import { HiMiniUsers } from "react-icons/hi2";
import { MdContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { useAuth } from "../store/auth";
import menu from "/image/menu.png"
import cross from "/image/cross.png"

export const AdminLayout = () => {
    const {user,isLoading} = useAuth();
    const [openmenu, setOpenmenu] = useState(false);
    
    if(isLoading){
        return <h1>loading..</h1>
    }
    if(!user.isAdmin){
        return <Navigate to='/' />
    }
    
    return(
        <>
            <header>
                <div className="container">
                <nav className="menu">
          <img className='menu-btn' src={openmenu ? cross : menu } alt="" onClick={()=>setOpenmenu(!openmenu)} />
            <ul className={`menu-items ${openmenu ? 'menu-open' : ''}`}>
                            <li> <NavLink to="/admin/users" className="item"><HiMiniUsers /> User</NavLink> </li>
                            <li><NavLink to="/admin/contacts" className="item"><MdContacts /> Contacts</NavLink></li>
                            <li><NavLink to="/service" className="item"><GrServices /> Services</NavLink></li>
                            <li><NavLink to="/" className="item"><IoMdHome /> Home</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <Outlet/>
            </header>
        </>
    )
}