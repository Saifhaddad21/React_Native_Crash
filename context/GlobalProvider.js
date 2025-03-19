import { createContext, useContext, useState, useEffect, Children } from "react";
import { getCurrentUser } from '../lib/appwrite'
import { isLoading } from "expo-font";

const GlabalContext = createContext();
export const useGlaobalContext = () => useContext(GlabalContext);

const GlobalProvider = ({ children }) => {

        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [user, setUser] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
    


useEffect(() => {
    getCurrentUser()
        .then((res) => {
            if (res) {
                setIsLoggedIn(true);
                setUser(res)
            } else {
                setIsLoggedIn(false);
                setUser(null)
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoggedIn(false);
        })
}, [])
return (
    <useGlaobalContext.Provider
    value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading
    }}
    >
        {children}
    </useGlaobalContext.Provider>
)
}

export default GlobalProvider;