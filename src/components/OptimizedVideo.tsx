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
      sourceTypes={["mp4", "webm"]}
      sourceTransformation={{
        webm: {
          quality: "auto:best",
          videoCodec: "vp9",
        },
        mp4: {
          quality: "auto:best",
          videoCodec: "h264",
        },
        hls: {
          streamingProfile: "hd",
        },
      }}
      posterOptions={{
        publicId: `https://res.cloudinary.com/dcrmzq3wo/image/upload/v1753369743/CK0A4855_hzv1dk.jpg`,
      }}
    />
  );
};

export default OptimizedVideo;
