// Add the Hero Page and GSAP effects
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Import video for large and small devices
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
const Hero = () => {
    // Add a video
    const [videoSrc, setVideoSrc] = useState(window.innerWidth <760 ? smallHeroVideo: heroVideo)
    // Make the video go horizontal on larger screens and vertically on smaller screens
    const handleVideoSrcSet = () => {
        if(windows.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }
    // Check for events happening by the user resizing the screen
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        // Clear the event after user is done resizing
        return() => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])
    // Add GSAP effects
    useGSAP(() => {
        // Animate the id to make the words appear with a fading effect
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
    }, [])
  return (
    // Fill up the page and make it appear below the navbar
    <section className="w-full nav-height bg-black relative">
      {/* Have the height at 83% and push the highlights below*/}
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
        {/* Play the video without sound and show the animation without user tampering with it */}
            <video className="point-event-none" autoPlay muted playsInline={true} key={videoSrc}>
                {/* Show the video source */}
               <source src={videoSrc} type="video/mp4" /> 
            </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
