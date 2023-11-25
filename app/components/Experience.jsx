import React from 'react'
import htmlIcon from '../../public/htmlIcon.png'
import cssIcon from '../../public/cssIcon.png'
import jsIcon from '../../public/jsIcon.png'
import reactIcon from '../../public/reactIcon.png'
import expressIcon from '../../public/nodeIcon.png'
import mongoIcon from '../../public/mongoIcon.png'
import firebaseIcon from '../../public/firebaseIcon.png'
import figmaIcon from '../../public/figmaIcon.png'
import fraground from '../../public/fraground.png'
import Image from 'next/image'

export default function Experience() {
  return (
    <>
      <div className='experience-container container'>
        <div className='exp-intro'>
          <h3>Experience</h3>
          <p>
            I have been now doing web development for about 2 years now. The
            quests continue and I&apos;m eager to learn the On-Going Frontend
            tech
          </p>
        </div>

        <div className='work'>
          <div className='tech-stack'>
            <h4>Some Tech Stack <br/>I&apos; worked with:</h4>
            {/* Feature: React Swiper for skills*/}
            <div className='skills'>
              <Image src={htmlIcon } alt='html icon' />
              <Image src={cssIcon} alt='css icon'/>
              <Image src={jsIcon} alt='js icon'/>
              <Image src={reactIcon} alt='react icon'/>
              <Image src={expressIcon} alt='express icon'/>
              <Image src={mongoIcon} alt='mongoDB icon'/>
              <Image src={firebaseIcon} alt='google firebase icon'/>
              <Image src={figmaIcon} alt='figma icon'/>
            </div>
          </div>

          <div className='workplace'>
            <h4>Where I&apos;ve worked:</h4>
              <Image src={fraground} alt='fraground'/>
          </div>
        </div>

      </div>
    </>
  );
}
