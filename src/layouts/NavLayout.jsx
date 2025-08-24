import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NavLayout = ({children}) => {
  return (
    <main className='min-h-screen'>
        <Navbar />
          <div >{children}</div>
      <Footer />
      
    </main>
  )
}

export default NavLayout
