import React from 'react'
import Navbar from '../../components/Navbar'
import NavLayout from '../../layouts/NavLayout'
import CaruselSection from './Section1/CaruselSection'
import Section1 from './Section1/Section1'

const LandingPage = () => {
  return (
   <NavLayout>
    <main>
      {/* carusel */}
      <Section1 />

    </main>
   </NavLayout>
  )
}

export default LandingPage
