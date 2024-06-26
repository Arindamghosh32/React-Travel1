import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
    <Navbar/>
    
    <Hero
    cName="hero"
    HeroImg="https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Your destination is been destined by you"
    p = "choose your own destination"
    
    url="/"
    btnclass="show"
    a="Travel Plan"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}
