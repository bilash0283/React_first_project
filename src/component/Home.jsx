import React from 'react'
import Common from './Common'


export default function Home() {
  const web = 'https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <Common name="Welcome to Home Page"
       imgsrc={web} 
       visit="/contact"
        btnname="Contact us" />
    </>
  )
}
