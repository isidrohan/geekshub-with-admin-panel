
import { useContext,createContext,useState,useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const storeTokenInLocalStorage = (storeToken) =>{
        setToken(storeToken);
        return localStorage.setItem("token",storeToken);
    }

    let isLoggedIn = !!token;
    console.log(isLoggedIn);
    console.log("token",token);

    // tackling the log out functionality
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token")
    }

    // JWT-Authentication : to get currently logged in user  
    const authenticationToken = token;
    const userAuthentication = async() =>{
        try {
            setIsLoading(true);
            // const response = await fetch(`http://localhost:5000/api/auth/user`,{
            const response = await fetch(`${window.location.origin}/api/auth/user`,{
                method: 'GET',
                headers:{
                    Authorization: authenticationToken,
                },
            })
            console.log("response after auth",response)
            if(response.ok){
                const data = await response.json();
                console.log("user data ",data)
                setUser(data);
                setIsLoading(false);
                    
            }
        } catch (error) {
            console.error("error while fetching the user data")
        } 
    }

    useEffect(() => {
      userAuthentication();
    }, [])
    
    return(
        <AuthContext.Provider value={{storeTokenInLocalStorage,LogoutUser,isLoggedIn,user,authenticationToken,isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () =>{
    const AuthContextValue = useContext(AuthContext);
    return AuthContextValue;
}

