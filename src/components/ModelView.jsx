import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import * as THREE from 'three';
import { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    // View each item in the model
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${
        index === 2
      } ? 'right-[-100%] : ''`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      {/* Create moving camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      {/* Control the rotation around the 3D item */}
      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())} // Getting a specific angle
      />

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
        {/* Load the feature */}
        <Suspense fallback={<div>Loading</div>}>
        <IPhone 
        // Enlarge the phone to see it 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            // Get information about the chosen item
            item={item}
            size={size}
        />
      </Suspense>
      </group>

      
    </View>
  );
};

export default ModelView;
