// import { createContext, useContext, useState, useEffect, Children } from "react";
// import { getCurrentUser } from '../lib/appwrite'
// import { isLoading } from "expo-font";

// const GlobalContext = createContext();
// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalProvider = ({ children }) => {

//         const [isLoggedIn, setIsLoggedIn] = useState(false);
//         const [user, setUser] = useState(null);
//         const [isLoading, setIsLoading] = useState(true);
    


// useEffect(() => {
//     getCurrentUser()
//         .then((res) => {
//             if (res) {
//                 setIsLoggedIn(true);
//                 setUser(res)
//             } else {
//                 setIsLoggedIn(false);
//                 setUser(null)
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         .finally(() => {
//             setIsLoggedIn(false);
//         })
// }, [])
// return (
//     <useGlobalContext.Provider
//     value={{
//         isLoggedIn,
//         setIsLoggedIn,
//         user,
//         setUser,
//         isLoading
//     }}
//     >
//         {children}
//     </useGlobalContext.Provider>
// )
// }

// export default GlobalProvider;


// import React, { createContext, useContext, useState, useEffect } from "react";
// import { getCurrentUser } from '../lib/appwrite';


// const GlobalContext = createContext();

// // Create a custom hook to use the context
// // export const useGlobalContext = () => useContext(GlobalContext);


// export const useGlobalContext = () => useContext(GlobalContext);


// const GlobalProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         getCurrentUser()
//             .then((res) => {
//                 if (res) {
//                     setIsLoggedIn(true);
//                     setUser(res);
//                 } else {
//                     setIsLoggedIn(false);
//                     setUser(null);
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//             .finally(() => {
//                 setIsLoading(false);  
//             });
//     }, []);

//     return (
//         <GlobalContext.Provider
//             value={{
//                 isLoggedIn,
//                 setIsLoggedIn,
//                 user,
//                 setUser,
//                 isLoading
//             }}
//         >
//             {children}
//         </GlobalContext.Provider>
//     );
// };

// export default GlobalProvider;



import React, { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from '../lib/appwrite';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true);
                    setUser(res);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);  
            });
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;


