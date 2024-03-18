import React, { createContext, useContext } from "react";


const ThemeContext=createContext({themeMode:"light",
darkTheme : ()=>{},
lightTheme:()=>{},

})
//directly we export ThemeProvider 
//2nd way of doing  
export  const ThemeProvider=ThemeContext.Provider 

export default function useTheme()
{
    return useContext(ThemeContext)
}
