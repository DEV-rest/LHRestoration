import React from "react";
import "./SketchfabEmbed.css";

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Van"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen="true"
        webkitAllowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/4de6b9bc214c41e6896390906c4bf8d0/embed?ui_infos=0"
      ></iframe>
    </div>
  );
};

export default SketchfabEmbed;
