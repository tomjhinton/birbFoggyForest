import { Sky, useGLTF, Text, Float, Environment } from "@react-three/drei"
import { OrbitControls , shaderMaterial, Center} from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { useRef , useEffect, useState, useMemo} from "react"
import { BlendFunction } from 'postprocessing'
import { Perf } from "r3f-perf"


import Tree from "./Tree.js"
import Rock from "./Rock.js"
import Pond from "./Pond.js"
import Fog  from './Fog.js'


export default function Experience(){

    const fogRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [backG, setbackG] = useState(false)
   

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
      }, [hovered])



      const rocks = useMemo(() => {
        const rocks = []

        for(let i=0;i<35;i++){
            rocks.push({
                position:[Math.sin(i) * 6. + (Math.random() *(Math.random() < 0.5 ? -1 : 1)),0, Math.cos(i) * 6. + (Math.random() *(Math.random() < 0.5 ? -1 : 1))]
       ,rotation: [0, Math.random() * Math.PI,0 ],
    scale: Math.random() *.5
        })}
        return rocks
    },[])

    
    const trees = useMemo(() => {
        const trees = []

        for(let i=0;i<30;i++){
            trees.push({
                position:[Math.sin(i) * 7. + (Math.random() *(Math.random() < 0.5 ? -1 : 1)),0, Math.cos(i) * 7. + (Math.random() *(Math.random() < 0.5 ? -1 : 1))]
       ,rotation: [0, Math.random() * Math.PI,0 ],
    scale:  1+(Math.random() *.5)
        })}
        return trees
    },[])

    const trees1 = useMemo(() => {
        const trees1 = []

        for(let i=0;i<38;i++){
            trees1.push({
                position:[Math.sin(i) * 12. + (Math.random() *(Math.random() < 0.5 ? -1 : 1)),0, Math.cos(i) * 9. + (Math.random() *(Math.random() < 0.5 ? -1 : 1))]
       ,rotation: [0, Math.random() * Math.PI,0 ],
    scale:  1+(Math.random() *.5)
        })}
        return trees1
    },[])

    const trees2 = useMemo(() => {
        const trees2 = []

        for(let i=0;i<42;i++){
            trees2.push({
                position:[Math.sin(i) * 16. + (Math.random() *(Math.random() < 0.5 ? -1 : 1)),0, Math.cos(i) * 13. + (Math.random() *(Math.random() < 0.5 ? -1 : 1))]
       ,rotation: [0, Math.random() * Math.PI,0 ],
    scale:  1+(Math.random() *.5)
        })}
        return trees2
    },[])

   

    return<>
    {/* <Perf position="top-left" /> */}
    <EffectComposer >

        
    
    <Fog 
    ref={ fogRef }
    blendFunction={ BlendFunction.DARKEN}

    />

    </EffectComposer>
     <OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5}/>
    {/* <Sky distance={450000} sunPosition={[0, .1, 0]} inclination={0} azimuth={0.025}/> */}
    {backG &&<color args={ ['#ffffff']} attach={'background'} />}

    
   {/* {backG && <Environment
    background
            files={ [
                './rs.jpeg',
                './rs.jpeg',
                './rs.jpeg',
                './rs.jpeg',
                './rs.jpeg',
                './rs.jpeg',
            ] }
        />} */}

    <Float>
         <Text
        
        font="./Art Dystopia 2.otf"
        scale={ 40 }
        rotation-y={  0.25 }
        position={ [ .75, 10.65, 0 ] }
        
        className="title"
        // onPointerOver={() => setHovered(!hovered)}
        //  onPointerOut={() => setHovered(false)}
         onClick={()=>setbackG(!backG) }
        >
          {' birb Foggy Forest'.toUpperCase()}
          <meshBasicMaterial color="#f3172d" toneMapped={false}
          
          />
        </Text>
        </Float>



    { trees.map((x, index) =>{
      
      return <Tree key={index} 
       position={x.position}
       rotation= {x.rotation }
       scale={x.scale}/>
   })}

    { trees1.map((x, index) =>{
      
      return <Tree key={index} 
       position={x.position}
       rotation= {x.rotation }
       scale={x.scale}/>
   })}

    { trees2.map((x, index) =>{
      
      return <Tree key={index} 
       position={x.position}
       rotation= {x.rotation }
       scale={x.scale}/>
   })}

    { rocks.map((x, index) =>{
      
      return <Rock key={index} 
       position={x.position}
       rotation= {x.rotation }
       scale={x.scale}/>
   })}

   <Pond/>
  

    </>
}