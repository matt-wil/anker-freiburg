"use client"

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
 


const OptimizedVideo = ({src}: {src: string}): React.JSX.Element=> {
  return (
        <CldVideoPlayer
            width="1920"
            height="1080"
            src={src}
            autoPlay
            loop
            muted

  fontFace="Source Serif Pro"
/>
  )
}

export default OptimizedVideo