import React, { useState, useRef } from "react";
import { Play, SkipBack, Pause, SkipForward, Volume2 } from "lucide-react";
import ReactPlayer from "react-player";

const VideoContent = ({ title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipBack = () => {
    playerRef.current.seekTo(0); // Restart the video
  };

  const handleSkipForward = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + 10); // Skip forward by 10 seconds
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      <div className="bg-black rounded-lg relative overflow-hidden">
        {/* Video Player */}
        <div className="relative aspect-video bg-gray-900">
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=nUBlNHZgjCg" // Supports YouTube, Vimeo, local files, etc.
            playing={isPlaying}
            volume={volume}
            width="100%"
            height="100%"
            // controls={true} // Hide default controls
            config={{
              youtube: {
                playerVars: { controls: 0, modestbranding: 1 },
              },
            }}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-20 h-20 bg-white/20 rounded-full flex items-center 
                  justify-center hover:bg-white/30 transition-colors"
                onClick={handlePlayPause}
              >
                <Play className="w-10 h-10 text-white" fill="white" />
              </button>
            </div>
          )}
        </div>

        {/* Video Controls */}
        <div className="bg-black p-4">
          <h2 className="text-white text-lg mb-4">{title}</h2>
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button onClick={handleSkipBack}>
                <SkipBack className="w-6 h-6" />
              </button>
              <button onClick={handlePlayPause}>
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              <button onClick={handleSkipForward}>
                <SkipForward className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="w-24"
              />
              <Volume2 className="w-6 h-6" />
            </div>
          </div>
        </div>
        <p
          className={` ${
            isPlaying ? " hidden " : " block "
          } text-slate-300 mt-4 absolute bottom-52 text-center w-full`}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default VideoContent;
