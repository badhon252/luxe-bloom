"use client";
import React, { useState, useRef, useEffect } from "react";
import { CirclePlay, CirclePause } from "lucide-react";

const VeideoCard: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Use HTMLVideoElement for the ref
  const [isPlaying, setIsPlaying] = useState(true); // Start with video playing

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Auto play when component mounts
    }
  }, []);

  const handlePlay = (): void => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Set to true when playing
    }
  };

  const handlePause = (): void => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false); // Set to false when paused
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-100 relative">
      <video ref={videoRef} autoPlay loop muted playsInline>
        <source
          src="https://cdn.shopify.com/videos/c/o/v/4050546dbc2b4968a77f2a501ba1fd9e.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-2 right-3 flex space-x-2">
        {isPlaying ? (
          <span onClick={handlePause}>
            <CirclePause />
          </span>
        ) : (
          <span onClick={handlePlay}>
            <CirclePlay />
          </span>
        )}
      </div>
    </div>
  );
};

export default VeideoCard;
