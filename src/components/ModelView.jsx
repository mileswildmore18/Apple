import { PerspectiveCamera, View } from "@react-three/drei"

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    // View each item in the model
    <View
    index={index}
    id={gsapType}
    className={`border-2 border-red-500 w-full h-full ${index === 2} ? 'right-[-100%] : ''`}>
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />

        {/* Create moving camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

    </View>
  )
}

export default ModelView