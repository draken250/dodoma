import React from 'react'
import Nav from '../components/nav'
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/productsection'

function Home() {
  return (
    <div>
        <Nav/>
        <HeroSection />
        <ProductSection/>
    </div>
  )
}

export default Home