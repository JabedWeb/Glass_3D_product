import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import  { Suspense } from "react";
import Scence from "./Scene";

const Experience = () => {
  return (
    <PresentationControls
    enabled={true} // the controls can be disabled by setting this to false
    global // Spin globally or by dragging the model
    cursor={true} // Whether to toggle cursor style on drag
    snap={false} // Snap-back to center (can also be a spring config)
    speed={1.5} // Speed factor
    zoom={1} // Zoom factor when half the polar-max is reached
    rotation={[Math.PI / 8, Math.PI / 4, 0]}
    polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment="city" intensity={0.1} contactShadow={false}>
        <Suspense fallback={null}>
        <Scence />
        </Suspense>
      </Stage>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2} >
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
    </PresentationControls>
  );
};

export default Experience;
