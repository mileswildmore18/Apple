import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";

// Import Three JS
import * as THREE from "three";

const Model = () => {
    // Choose what phone to look at in the model at small or large size and different color textures
 const [size, setSize ] = useState('small');
//  Specify model details
 const [model, setModel ] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg, 
 });

 // Setup camera control for the model view
const cameraControlSmall = useRef();
const cameraControlLarge = useRef();

// Add Three JS to view phones model
const small = useRef(new THREE.Group());
const large = useRef(new THREE.Group());

// Add rotation 
const [smallRotation, setSmallRotation] = useState(0);
const [largeRotation, setLargeRotation] = useState(0);
  // Add animation to the header
  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        {/* View the models of the phones */}
        <div className="flex flex-col item-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                {/* Pass important information from Model to view phone for reference */}
                <ModelView 
                    index={1}
                    groupRef={small}
                    gsapType="view1"
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={size}
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
