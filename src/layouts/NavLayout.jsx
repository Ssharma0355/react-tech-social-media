import React from 'react'
import Navbar from '../components/Navbar'

const NavLayout = ({children}) => {
  return (
    <main className='min-h-screen'>
        <Navbar />
          <div >{children}</div>
      
    </main>
  )
}

export default NavLayout
