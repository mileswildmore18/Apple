import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
    // Animate the video for HowItWorks
  const videoRef = useRef();
  useGSAP(() => {
    // Animate the image of the chip easing into frame from large size to normal size
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    // Add a image showing the chip in the center of the section
    <section className="common-padding">
      <div className="screen=max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        {/* Add details about the featured item */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        {/* Display the border of a phone for the video to play in*/}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            {/* Display the video */}
            <div className="hiw-video">
              <video
                className="point-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-blue font-semibold text-center mt-3">Honkai: Star Rail</p>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_text">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {" "}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best stength-to-weight-ratios of any
                    metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    , You'll notice the difference the moment you pick one up
                  </p>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
