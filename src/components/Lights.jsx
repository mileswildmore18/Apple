import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    // grouping different lights and lightformers. Use group to organize lights, camera, meshes, and other objects in the scene.
    <group name="lights">
      {/* Create a background environment of the scene for items */}
      <Environment resolution={256}>
        <group>
          {/* Create custom lights with various shapes and properties in a 3D scene */}
          <Lightformer
            form="rect"
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color={"#495057"}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {/* Create a light source positioned at a specif point in the scene emitting light in a specific direction */}
      <spotlight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // Soft edge of a shadow cast by a point light
        decay={0} // the amount the light dims as it moves away from the source
        intensity={Math.PI * 0.2} // light intensity
        color={"#f8f9fa"}
      />
      <spotlight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotlight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      />
    </group>
  );
};

export default Lights;