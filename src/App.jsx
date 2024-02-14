import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Childhood from "./pages/Childhood";
import Alwaystogether from "./pages/Alwaystogether";
import Ustogether from "./pages/Ustogether";
import billie from './assets/Billie Eilish - everything i wanted (Official Audio).mp3'
import { useEffect, useRef, useState } from "react";
import { sound_off, sound_on } from "./assets/icons";
const App = () => {
  const audioRef = useRef(new Audio(billie))
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  useEffect(() =>{
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/childhood" element={<Childhood />} />
          <Route path="/ustogether" element={<Ustogether />} />
          <Route path="/alwaystogether" element={<Alwaystogether />} />
        </Routes>
      </Router>
      <div className="absolute bottom-2 left-2">
          <img 
            src={isPlayingMusic ? sound_off : sound_on} 
            alt="sound" 
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
    </main>
  )
}

export default App
