// Add Video carousel to the index file
import React from 'react'
import Highlights from './Highlights'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
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
                    >
                        <source src={list.video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    ))}
    </div>
    </>
  )
}

export default VideoCarousel