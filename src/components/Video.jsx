import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import videoFile from "../assets/video/1.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayPauseText, setShowPlayPauseText] = useState("");
  const [showMuteText, setShowMuteText] = useState("");

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowPlayPauseText("Play");
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowPlayPauseText("Pause");
    }

    setTimeout(() => setShowPlayPauseText(""), 800);
  };

  const toggleMuteUnmute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    setShowMuteText(videoRef.current.muted ? "Mute" : "Unmute");


    setTimeout(() => setShowMuteText(""), 800);
  };

  return (
    <div className="py-4 px-10 lg:px-16 relative">
      <h2 className="mb-4 text-2xl font-semibold">Innovations by Prestige.</h2>

      <div className="relative w-full">

        <video
          ref={videoRef}
          src={videoFile}
          className="w-full rounded-lg"
        ></video>


        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {showMuteText && (
            <span className="bg-black/60 text-white px-2 py-1 text-xs rounded">
              {showMuteText}
            </span>
          )}
          <button
            onClick={toggleMuteUnmute}
            className="text-white text-xl bg-black/50 p-2 rounded-full mt-1"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>

    
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {showPlayPauseText && (
            <span className="bg-black/60 text-white px-2 py-1 text-xs rounded mb-1">
              {showPlayPauseText}
            </span>
          )}
          <button
            onClick={togglePlayPause}
            className="text-white text-3xl bg-black/50 p-4 rounded-full"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
