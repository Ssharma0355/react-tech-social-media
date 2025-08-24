import React from 'react'
import Navbar from '../../components/Navbar'
import NavLayout from '../../layouts/NavLayout'
import CaruselSection from './Section1/CaruselSection'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'

const LandingPage = () => {
  return (
   <NavLayout>
    <main className='flex flex-col px-8 py-8 h-full w-full'>
      {/* carusel */}
      <Section1 />
      <Section2 />

    </main>
   </NavLayout>
  )
}

export default LandingPage
