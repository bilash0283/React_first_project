import React from 'react'
import Common from './Common'

export default function About() {
  const web = 'https://plus.unsplash.com/premium_photo-1673697240011-76f7f9220300?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <>
      <Common name="Welcome to About Page"
       imgsrc={web} 
       visit="/service"
        btnname="Service" />
    </>
  )
}
