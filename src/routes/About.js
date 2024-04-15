import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
export default function About() {
  return (
    <>
    <Navbar/>
    
    <Hero
    cName="about"
    HeroImg="https://images.unsplash.com/photo-1621849400072-f554417f7051?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="This is we "
    />
    
    <Trip/>
    <Footer></Footer>
    
    </>
  )
}
