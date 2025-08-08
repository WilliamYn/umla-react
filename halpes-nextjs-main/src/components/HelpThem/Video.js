import VideoData from "@/data/videoData";
import React from "react";

const Video = () => {
  const { id, title } = VideoData;

  return (
    <section className="help-them__top-video-box">
      <div className="help-them__youtube-embed" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
