import React from "react";

const video = () => {
  return (
    <div className="w-full h-full">
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/1119600858/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c4a137161d6ce80a52c50c7ee23d4fdf8df103bfc816252fc304e317a43bacc6"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default video;
