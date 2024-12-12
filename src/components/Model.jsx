import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useRef, useState, useEffect } from "react";
import { yellowImg } from "../utils";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
// Import Three JS
import * as THREE from "three";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
    // Choose what phone to look at in the model at small or large size and different color textures
 const [size, setSize] = useState('small');
//  Specify model details
 const [model, setModel] = useState({
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

// Create timeline for phone sizes
const tl = gsap.timeline();

useEffect(() => {
    // Show timeline for large iPhone model
    if(size === 'large') {
        animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
            transform: 'translateX(-100%)',
            duration: 2
        })
    }
    // Show timeline for small iPhone model
    if(size === 'small') {
        animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
            transform: 'translateX(0)',
            duration: 2
        })
    }
}, [size])

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
                {/* Pass important information from Model to view phone for reference on small view*/}
                <ModelView 
                    index={1}
                    groupRef={small}
                    gsapType="view1"
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={size}
                />
                {/* Pass important information from Model to view phone for reference on large view*/}
                <ModelView 
                    index={2}
                    groupRef={large}
                    gsapType="view2"
                    controlRef={cameraControlLarge}
                    setRotationState={setLargeRotation}
                    item={model}
                    size={size}
                />

                <Canvas
                // View canvas in full and reset position
                className="w-full h-full"
                    style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: 'hidden'
                    }}
                    eventSource={document.getElementById('root')}
                    >
                    <View.Port />
                </Canvas>
            </div>
            {/* Add title for each product */}
            <div className="mx-auto w-full">
                <p className="text-sm font-light text-center mb-5">{model.title}</p>
                {/* Add different colors for the products */}
                <div className="flex-center">
                    <ul className="color-container">
                        {/* Add color options */}
                        {models.map((item, i) => (
                            <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{backgroundColor: item.color[0] }} onClick={() => setModel(item)} />
                        ))}
                    </ul>
                    {/* Add button sizes */}
                    <button className="size-btn-container">
                        {sizes.map(({label, value}) => (
                            <span key={label} className ="size-btn"
                            // Choose button
                            style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white'}} onClick={() => setSize(value)}>
                                {label}
                            </span>
                        ))}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
