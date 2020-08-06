import React, { Component } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Manus from './Manus'
import TopSellers from './TopSellers'
import Reviews from './Reviews'
import Footer from './Footer'


const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <NavBar />
      <Header />
      <Manus />
      <TopSellers />
      <Reviews />
      <Footer />
    </>
  )
}

export default HomePage
