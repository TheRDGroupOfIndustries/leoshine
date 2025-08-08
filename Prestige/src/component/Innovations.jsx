import React, { useState, useRef, useEffect } from "react";
import Player from "@vimeo/player";

export default function Innovations() {
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current && !playerRef.current) {
      playerRef.current = new Player(iframeRef.current);
      playerRef.current.setMuted(true);
    }
  }, []);

  const toggleMute = async () => {
    if (playerRef.current) {
      if (muted) {
        await playerRef.current.setMuted(false);
        setMuted(false);
      } else {
        await playerRef.current.setMuted(true);
        setMuted(true);
      }
    }
  };

  return (
    <div className="container-fluid font-sans">
      {/* Header */}
      <h1 className="h5 fw-bold text-dark ">Innovations by Prestige.</h1>

      {/* Vimeo Player */}
      <div className="  w-100  rounded overflow-hidden ratio ratio-16x9">
        <iframe
          src="https://player.vimeo.com/video/998111868?badge=0&autopause=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          ref={iframeRef}
          allowFullScreen
          title="Innovations by Prestige Video"
          className="w-100 h-100"
        ></iframe>
      </div>
    </div>
  );
}