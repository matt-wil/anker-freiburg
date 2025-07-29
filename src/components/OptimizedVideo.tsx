"use client"

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
 


const OptimizedVideo = ({src, className}: {src: string, className?: string}): React.JSX.Element=> {
  return (
        <CldVideoPlayer
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