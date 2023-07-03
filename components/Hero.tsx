"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {

    const handleScroll = () => {
      const nextSection = document.getElementById("discover");

      if(nextSection) {
        nextSection.scrollIntoView({behavior: 'smooth'})
      }
    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                TROVA, PRENOTA O NOLEGGIA UN'AUTO  IN MODO FACILE E VELOCE 
            </h1>
            <p className="hero__subtitle">Semplifica la tua esperienza di noleggio auto con il nostro semplice processo di prenotazione</p>

            <CustomButton
              title="Cerca Auto"
              containerStyles='bg-primary-blue text-white rounded-full mt-10'
              handleClick={handleScroll}

             />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
              <Image src="/hero.png" alt="hero" fill className="object-contain " />
            </div>
            <div className="hero__image-overlay" />
        </div>     
    </div>
  )
}

export default Hero