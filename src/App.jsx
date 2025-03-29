import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import { About, References, Argument, Hero, Navbar, Works, StarsCanvas } from "./components";
import Conclude from './components/Conclude';

const BackgroundMusic = ({ src, volume = 0.3, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch((error) => {
        console.error("Play failed due to autoplay restrictions:", error);
      });
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} src={src} loop />
  );
};

const App = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handlePlayMusic = () => {
    setIsMusicPlaying(true);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>

        {/* Background Music Component */}
        <BackgroundMusic src="/music/jazz.mp3" volume={0.3} isPlaying={isMusicPlaying} />

        {/* Play Music Button */}
        {!isMusicPlaying && (
          <button
            onClick={handlePlayMusic}
            className="fixed bottom-5 left-5 p-3 bg-black text-white rounded-lg z-50"
          >
            Play Music 🎵
          </button>
        )}

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Argument />
        <Works />
        {/* <div className="bg-extra bg-cover bg-no-repeat bg-center mt-[400px]">
          <Extra />
        </div> */}
        <div className="relative z-0">
          <Conclude />
          <StarsCanvas />
        </div>
        <References />
      </div>
    </BrowserRouter>
  );
};

export default App;
