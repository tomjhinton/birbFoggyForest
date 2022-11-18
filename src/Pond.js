import { shaderMaterial, Cylinder, MeshReflectorMaterial, Reflector } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import vertexShader from './shaders/vertex.js'
import fragmentShader from './shaders/fragment.js'
import { extend , useFrame} from "@react-three/fiber";
import { useRef } from "react";

const WaterMaterial = shaderMaterial(

    {
        uTime: 0,
        
    },
    vertexShader,
    fragmentShader
)
extend({WaterMaterial})

export default function Pond(){
    const waterMaterial = useRef()
    useFrame((state, delta) => {
        waterMaterial.current.uTime += delta
    })
   

    return<>
    <mesh>
        <cylinderGeometry args={[4.5,4.5,0.01, 40, 40]} />
       <waterMaterial ref={waterMaterial}/>
    </mesh>
    
    </>
}