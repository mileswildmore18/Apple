// Add GSAP components
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
// Add the Highlight section
const Highlights = () => {
    useGSAP(() => {
        // Animate the title and links in the Highlight section
        gsap.to('#title', { opacity: 1, y: 0 })
        // Make links appear slightly behind the other as they appear
        gsap.to('.link',{ opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    }, [])

  return (
    // Fill the entire width and height of the section with no scroll bar
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
        <div className="screen-max-width">
            {/* Show highlights on the left and events on the right on large and medium deices */}
            <div className="mb-12 w-full md:flex items-end justify-between">
                <h1 id="title" className="section-heading">Get the highlights!</h1>
                {/* Add events that will be spread out from each other */}
                <div className="flex flex-wrap items-end gap-5">
                    <p className="link">Watch the film
                        {/* Add image for watching the film*/}
                        <img src={watchImg} alt="watch" className="ml-2" />
                    </p>
                    <p className="link">Watch the event
                        {/* Add image for watching the event */}
                        <img src={rightImg} alt="wright" className="ml-2" />
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights