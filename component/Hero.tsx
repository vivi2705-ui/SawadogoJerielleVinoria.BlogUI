import React from 'react'
import SideBar from './SideBar'
import Link from "next/link"


const Hero = () => {
  return (
<div className="drawer">
      
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

      {/* Contenu principal */}
      <div className="drawer-content">

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://japanspecialist.com/documents/465938/1146380/1_How_to_Celebrate_Japan_Cherry_Blossom_thumbnail.jpg/8eec6ac5-cb10-4630-7722-fa5bf7f9c6f7?version=1.0&t=1756284602921&download=true)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-secondary font-bold">ようこそ、仲間 </h1>
              <p className="mb-5">Yōkoso! to the Otaku hub🌸</p>

  
              <label htmlFor="my-drawer-5" className="btn btn-primary">
                Search articles
              </label>
               <Link href="/formulaire" className="btn btn-secondary">
  Create articles
</Link>
            </div>
          </div>
        </div>

      </div>

  
      <SideBar/>

    </div>
  )
}
export default Hero