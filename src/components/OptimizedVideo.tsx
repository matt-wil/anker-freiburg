"use client"

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
 


const OptimizedVideo = ({src, className, width="1920", height="1080"}: {src: string, className?: string, width?: string, height?: string}): React.JSX.Element=> {
  return (
        <CldVideoPlayer
            width={width}
            height={height}
            src={src}
            autoPlay
            loop
            muted
            className={className}

  fontFace="Source Serif Pro"
/>
  )
}

export default OptimizedVideo