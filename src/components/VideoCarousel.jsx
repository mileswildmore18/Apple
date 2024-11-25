// Add Video carousel properties to the index file
import { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'

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
    })

const [loadedData, setLoadedData] = useState([]);

    // Deconstruct the file
const { isEnd, isLastVideo, startPlay, videoId, isPLaying} = video; 

//Start Current video
useEffect(() => {
    if(loadedData.length > 3) {
        if(!isPLaying) {
            videoRef.current[videoId].pause();
        } else {
            startPlay && videoRef.current[videoId].play()
        }
    }
}, [startPlay,videoId, isPLaying, loadedData])


// Play the videos
useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[videoId]) {
        //animate the progress of the video
        let anim = gsap.to(span[videoId], {
            // Check what happens after the video updates to next animation
            onUpdate: () => {

            },
            // Check what happens after the animation on the video finishes
            onComplete: () => {

            }
        })
    }
}, [videoId, startPlay])
  return (
    <>
    {/* Add all videos from the constant index js file to show the videos */}
    <div className = 'flex items-center'>
    {hightlightsSlides.map((list, i) => (
        <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            {/* Add items in the carousel in full display */}
            <div className="video-carousel_container">
                <div className="w-full h-full flex-center rpimded-3xl overflow-hidden bg-black">
                    {/* Add video source to play the clip automatically */}
                    <video
                        id="video"
                        playsInline={true}
                        preload='auto'
                        muted
                        ref={(el) => (videoRef.current[i] = el)}
                        onPlay={() => {
                            //spread information about the video
                            setVideo((prevVideo) => ({
                                ...prevVideo, isPLaying: true
                            }))
                        }}
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
    </>
  )
}

export default VideoCarousel