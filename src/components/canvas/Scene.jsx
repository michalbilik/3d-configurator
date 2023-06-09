import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import Chair from "./Chair";

const Scene = () => {
    return (
      <>
        <PresentationControls
          speed={1.5}
          global
          polar={[-0.1, Math.PI / 4]}
          rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
          <Stage environment="city" intensity={0.2} castShadow={false}>
            <Chair />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.55, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={10}
              roughness={2}
              depthScale={0.5}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#373737"
              metalness={0.2}
            />
          </mesh>
        </PresentationControls>
      </>
    );
  };

export default Scene;
