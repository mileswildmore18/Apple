// Add the Hero Page and GSAP effects
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
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
      </div>
    </section>
  );
};

export default Hero;
