"use client";

import { useEffect, useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

interface OptimizedVideoProps {
  src: string;
  className?: string;
}

const OptimizedVideo = ({
  src,
  className,
}: OptimizedVideoProps): React.JSX.Element => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    setVideoSrc(src);
  }, [src]);

  if (!videoSrc) {
    return <div>Loading...</div>;
  }

  return (
    <CldVideoPlayer
      src={videoSrc}
      loop
      muted
      className={className}
      fontFace="Source Serif Pro"
      transformation={{
        start_offset: 5,
      }}
    />
  );
};

export default OptimizedVideo;
