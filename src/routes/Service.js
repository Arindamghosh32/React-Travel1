import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
    <Navbar/>
    
    <Hero
    cName="hero"
    HeroImg="https://images.unsplash.com/photo-1523528283115-9bf9b1699245?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Service"
    
    
    
    />
    <Trip/>
    <Footer/>
    </>
  )
}
