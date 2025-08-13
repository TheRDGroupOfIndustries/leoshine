import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import video1 from "../assets/video/2.mp4";
import video2 from "../assets/video/5.mp4";
import video3 from "../assets/video/3.mp4";
import video4 from "../assets/video/4.mp4";

const VideoCard = ({ src }) => {
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
    <div className="relative group w-full">

      <video
        ref={videoRef}
        src={src}
        className="w-full h-100 object-cover rounded-lg"
      ></video>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      <button
        className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-40px] opacity-0 group-hover:mb-4 group-hover:opacity-100 transition-all duration-300 px-4 py-1 bg-red-500 text-white text-sm rounded"
      >
        Shop Now
      </button>
    </div>
  );
};

const VideoGallery = () => {
  const videos = [video1, video2, video3, video4];

  return (
    <div className="py-4 px-10 lg:px-16">
      <h2 className="mb-6 text-2xl font-semibold">
        Healthy Lifestyle with Prestige
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((src, index) => (
          <VideoCard key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
