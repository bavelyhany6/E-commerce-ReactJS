import { createContext, useEffect, useState } from "react";

export const authContext= createContext();
export function AuthProvider({children}){


const [token, settoken] = useState(null)

useEffect(() => {
  if (localStorage.getItem('tkn') !== null){
    settoken(localStorage.getItem('tkn'))
  }

}, []);


    return <authContext.Provider value={ {token ,settoken} }>
    {children} 
    
    
    
    </authContext.Provider>

}