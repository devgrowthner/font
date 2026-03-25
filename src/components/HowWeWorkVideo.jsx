'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';

const HowWeWorkVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const handleVolumeChange = (val) => {
    const v = Number(val);
    setVolume(v);
    if (videoRef.current) videoRef.current.volume = v;
    if (v === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-2 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50/50 to-purple-50/30 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 text-xs sm:text-sm font-semibold mb-4 sm:mb-5 shadow-sm text-brand-green"
            // style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)', borderColor: 'rgba(113, 147, 52, 0.3)', borderWidth: '1px', color: '#719334' }}
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Our AI Process
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4 sm:mb-6 leading-tight px-1">
            How We Build{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AI Solutions
            </span>
          </h2>
          
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-body px-1">
            A proven AI-first methodology that transforms businesses with intelligent automation
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20 w-full max-w-full sm:max-w-5xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#719334]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
            <video
              ref={videoRef}
              className="w-full h-auto bg-black object-contain"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            >
              <source src="/videos/zynexfinal1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Video Controls - Show on Hover */}
            <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] sm:w-auto flex justify-center">
              <div className="flex items-center gap-2 sm:gap-3 bg-[#719334]/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" strokeWidth={2.5} />
                  )}
                </button>

                {/* Replay Button */}
                <button
                  onClick={handleReplay}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                  aria-label="Replay"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                </button>

                {/* Mute / Volume */}
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                  )}
                </button>

                {/* Volume Slider - Hidden on very small screens */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => handleVolumeChange(e.target.value)}
                  className="hidden sm:block w-20 md:w-28 h-1 rounded-lg bg-white/30 accent-white flex-shrink-0"
                  aria-label="Volume"
                />
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };

 export default HowWeWorkVideo;
