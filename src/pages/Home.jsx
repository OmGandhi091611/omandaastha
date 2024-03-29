import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import { HomeInfo , Loader } from "../components";
import { Plane, Bird, Island, Sky } from "../models"
import song_1 from '../assets/TUM SE HI (INSTRUMENTAL).mp3'
import { sound_off, sound_on } from "../assets/icons";
const Home = () => {
  const audioRef = useRef(new Audio(song_1))
  audioRef.current.volume = 0.5
  audioRef.current.loop = true
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];
    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation]
  }
  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }
    else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition]
  }

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play()
    }
    else {
      audioRef.current.pause()
    }
    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating} ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2}/>
              <ambientLight intensity={0.5} />
              <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={1}/>
              <Bird />
              <Sky />
              <Island 
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
              />
              <Plane 
                isRotating={isRotating}
                scale={planeScale}
                position={planePosition}
                rotation={[0, 20, 0]}
              />
            </Suspense>
        </Canvas>
        <div className="absolute bottom-2 left-2">
          <img 
            src={isPlayingMusic ? sound_off : sound_on} 
            alt="sound" 
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
    </section>
  )
}

export default Home
