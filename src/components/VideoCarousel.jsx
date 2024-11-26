// Add Video carousel properties to the index file
import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Add video carousel properties to display different items
const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  // Check to see which video is playing
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPLaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  // Deconstruct the file
  const { isEnd, isLastVideo, startPlay, videoId, isPLaying } = video;

  //Animate the video playing
  useGSAP(() => {
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prevVideo) => ({
          ...prevVideo,
          startPlay: true,
          isPLaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);
  //Start Current video
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPLaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPLaying, loadedData]);

  //Add Meta data to videos
  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  // Play the videos
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      //animate the progress of the video
      let anim = gsap.to(span[videoId], {
        // Check what happens after the video updates to next animation
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;
            // adjust window based on different mobile devices or small windows
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            // check the progress and animation of the progress bar of the video
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        // Check what happens after the animation on the video finishes and level with the time the animation lasts
        onComplete: () => {
          if (isPLaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      //restart video when animation of video ends
      if (videoId === 0) {
        anim.restart();
      }
      //  Update the animation bar
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId] / hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPLaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  //Functions of playing the video
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPLaying: !prevVideo.isPLaying,
          videoId: 0,
        }));
        break;
      default:
        return video;
    }
  };
  return (
    <>
      {/* Add all videos from the constant index js file to show the videos */}
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            {/* Add items in the carousel in full display */}
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rpimded-3xl overflow-hidden bg-black">
                {/* Add video source to play the clip automatically */}
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                 // Move to next video on next span dot and expand the duration of the next spans
                  onEnded={() => 
                    i !== 3
                     ? handleProcess('video-end', i)
                     : handleProcess('video-last')
                  }
                  onPlay={() => {
                    //spread information about the video
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPLaying: true,
                    }));
                  }}
                  //  Trigger the event when Meta data is loaded
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              {/* Display information on top of the video */}
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  // Add font style to text
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        {/* Add a background for buttons to scroll through products and track progression */}
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {/* Keep track of video to next video */}
          {videoRef.current.map((_, i) => (
            // Add buttons for the button of the video carousel
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              {/* Makes buttons disappear for some reason on load up */}
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        {/* Add button to play or pause */}
        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPLaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPLaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPLaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
