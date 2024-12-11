import React from 'react'
import { chipImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const HowItWorks = () => {
    useGSAP(() => {
        // Animate the image of the chip easing into frame from large size to normal size
      gsap.from('#chip', {
        scrollTrigger: {
            trigger: '#chip',
            start: '20% bottom'
        },
        opacity: 0,
        scale: 2,
        duration: 2,
        ease: 'power2.inOut'   
    })
}, []);

  return (
    // Add a image showing the chip in the center of the section
    <section className="common-padding">
        <div className='screen=max-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} alt='chip' width={180} height={180} />
            </div>
        </div>
    </section>
  )
}

export default HowItWorks