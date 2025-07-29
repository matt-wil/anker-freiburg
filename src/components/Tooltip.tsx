"use client"

import { useState } from "react"
 
const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
}


const Tooltip = ({text, children, position = "top"}) => {
    const [visible, setVisible] = useState(false);
    const posClass = positionClasses[position] || positionClasses.top

  return (
    <div
        className="relative inline-flex"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
    >
        {children}
        {visible &&(
            <div className={`absolute ${posClass} px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg z-10 whitespace-nowrap`}>
                {text}
            </div>
        )}
    </div>
  )
}

export default Tooltip