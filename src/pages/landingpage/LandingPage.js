import React from 'react'
import Navbar from '../../components/Navbar'
import NavLayout from '../../layouts/NavLayout'
import CaruselSection from './CaruselSection'

const LandingPage = () => {
  return (
   <NavLayout>
    <main>
      {/* carusel */}
      <CaruselSection />

    </main>
   </NavLayout>
  )
}

export default LandingPage
