import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Icosahedron, Decal, useTexture , Float} from '@react-three/drei';


const Ball = (props) => {
  

  const [decal]=useTexture([props.imgUrl]);
  
 
  return (
    
      
     <Float rotationIntensity={1} speed={2.75} floatIntensity={3}>

    <mesh >
      <Icosahedron args={[1, 1]}  scale={[1.5,1.5,1.5]}>
        <meshStandardMaterial 
        color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
           />
           <Decal
           position={[0, 0, 1]}
            map={decal}
            rotation={[2*Math.PI,0, 6.25]}
            flatShading
            />
      </Icosahedron>
    </mesh>
     </Float> 
    
  );
};

const BallCanvas = ({icon}) => {
 
  return (
    <div >
     <Canvas>
     <ambientLight intensity={2} />
      <directionalLight position={[1, 1, 0.5]} intensity={5} />
      <OrbitControls enableZoom={false} />
      
       <Ball imgUrl={icon} />
    </Canvas>
    </div>
  );
};


export default BallCanvas;