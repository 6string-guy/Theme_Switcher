import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/Button'
import Card from './components/Card'
import useTheme, { ThemeProvider } from './context/theme'

function App() {
  const[themeMode, setThemeMode]=useState( "light")
   const darkTheme=()=>
   {
    setThemeMode('dark')
   }
   const lightTheme=()=>
   {
    setThemeMode('light')
   }
   //actual change of theme 
   useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
   },[themeMode])

   //depencency of button is on themeMode

  return (
   <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {
                          <ThemeBtn >
                          
                          </ThemeBtn>}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {<Card></Card>}
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
