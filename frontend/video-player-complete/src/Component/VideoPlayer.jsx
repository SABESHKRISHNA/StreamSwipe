import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ videoId }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    let clickCount = 0;
    let lastClickTime = 0;
    let rewindTimer = null;
    let fastForwardTimer = null;

    const handleClick = (event) => {
      const currentTime = video.currentTime;
      const currentClickTime = Date.now();

      // Calculate time since the last click
      const timeSinceLastClick = currentClickTime - lastClickTime;

      // Check if it's a double click within a short time frame (e.g., 300 milliseconds)
      if (timeSinceLastClick < 300) {
        clickCount++;

        if (clickCount === 1) {
          // First click, move 10 seconds back on double click on the left
          if (event.clientX < window.innerWidth / 2) {
            video.currentTime -= 10;
          }
        } else if (clickCount === 2) {
          // Second click, move 10 seconds forward on double click on the right
          if (event.clientX > window.innerWidth / 2) {
            video.currentTime += 10;
          } else  {
            // Double click in the middle, toggle play/pause
            if (isPlaying) {
              video.pause();
              setIsPlaying(false);
            } else {
              video.play();
              setIsPlaying(true);
            }
          }

          // Reset click count and time
          clickCount = 0;
        }
      } else {
        // Reset click count and time for long pauses between clicks
        clickCount = 1;
      }

      lastClickTime = currentClickTime;

      // Prevent default behavior (fullscreen) on double-click
      event.preventDefault();
    };

    const handleMouseDown = (event) => {
      if (event.clientX < window.innerWidth / 2) {
        // Press and hold on the left side to rewind at 1x speed
        rewindTimer = setInterval(() => {
          video.currentTime -= 2;
        }, 1000);
      } else {
        // Press and hold on the right side to fast forward at 2x speed
        fastForwardTimer = setInterval(() => {
          video.currentTime += 2;
        }, 1000);
      }
    };

    const handleMouseUp = () => {
      // Clear the rewind and fast forward timers when the mouse button is released
      clearInterval(rewindTimer);
      clearInterval(fastForwardTimer);
    };

    video.addEventListener('click', handleClick);
    video.addEventListener('mousedown', handleMouseDown);
    video.addEventListener('mouseup', handleMouseUp);

    return () => {
      video.removeEventListener('click', handleClick);
      video.removeEventListener('mousedown', handleMouseDown);
      video.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isPlaying]);

  return (
    <video ref={videoRef} width='700' height='315' controls autoPlay>
      <source src={"https://streamswipe-server.onrender.com"} type='video/mp4'></source>
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
