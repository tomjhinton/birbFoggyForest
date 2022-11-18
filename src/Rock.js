import { useRef } from "react"
import { useGLTF, Clone } from "@react-three/drei"

export default function Tree({position, rotation, scale}){

    let tree = useRef()
    const model = useGLTF('./rock.glb')
   
    return <>
         <Clone object={model.scene} scale={scale} position={position} rotation={rotation} re/>

    </>
}