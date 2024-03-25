import { BrowserRouter, Route ,Routes} from "react-router-dom";
import {Home} from "./pages/Home"
import {About} from './pages/About'
import {Register} from './pages/Register'
import {Contacts} from './pages/Contacts'
import {Login} from './pages/Login'
import {Service} from './pages/Service'
import {Logout} from './pages/Logout'
import {NavBar} from './components/NavBar'
import { Error } from "./pages/Error";
import { AdminContacts } from "./pages/Admin-contacts";
import { AdminLayout } from "./pages/AdminLayout";
import { AdminUsers } from "./pages/Admin-users";
import { AdminUpdate } from "./pages/Admin-update";
const App = () => {
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/*" element={<Error/>}></Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}></Route>
          <Route path="contacts" element={<AdminContacts/>}></Route>
          <Route path="users/edit/:id" element={<AdminUpdate/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
}

export default App