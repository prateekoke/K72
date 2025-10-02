import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export const NavBarContext= createContext()
export const NavbarColorContext = createContext()


const NavContext = ({children}) => {
  const [navColor, setNavColor] = useState('white')
  const [NavOpen, setNavOpen] =useState(false)

  const locate = useLocation().pathname
    useEffect(function(){
        if(locate == '/projects' || locate == '/agency'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])

    
  return (
    <div>
      <NavBarContext.Provider value={[NavOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavBarContext.Provider>
    </div>
  )
}

export default NavContext