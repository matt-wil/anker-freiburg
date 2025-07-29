"use client"

import { useEffect } from "react";

function ScrollLogger() {
    useEffect(() => {
      // Log initial scroll position on mount
      console.log("Initial scrollY:", window.scrollY);
      // Define scroll handler
      const handleScroll = () => {
        console.log("Scroll Y:", window.scrollY);
      };
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return null; // or any JSX if needed
  }
  export default ScrollLogger;