import React from 'react'
import design from '../../public/design.png'
import code from '../../public/code.png'
import Image from 'next/image'



export default function Services() {
  return (
    <>
      <div className='service-container'>
        <div>
          <h3>What I Do</h3>
          <div className='services'>
            <div className='service'>
              {/* <img src={design} alt='design logo' /> */}
              <Image
                src={design}
                // width={100}
                height={150}
                className='mx-auto'
                alt='design logo'
              />
              <h4>Design</h4>
              <p>
                Having deep understanding how important product&apos;s User
                Experience is, I design products not only for the User Interface
                but also how the user interacts with the products, so people can
                have the joy using it. I strive to build software with design
                patterns.
              </p>
            </div>
            <div className='service'>
              <Image
                src={code}
                // width={100}
                height={150}
                className='mx-auto'
                alt='development logo'
              />
              {/* <img  alt='development logo' /> */}
              <h4>Developing</h4>
              <p>
                With the experiences and knowledge I gathered in University, I
                try to write clean, re-usable code. Follow the core concept,
                algorithm principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
