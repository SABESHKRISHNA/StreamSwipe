// Home.js
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import AboutSection from './AboutSection';
import '../styles/Home.css';
const Home = () => {
  const [videoId, setVideoId] = useState(null);

  function playVideo(e, videoId) {
    e.preventDefault();
    setVideoId(videoId);
  }

  return (
    <div>
      <div className='title'>
        <h1>Welcome to the StreamSwipe Experience</h1>
        <p>Embark on a revolutionary video journey with our interactive player featuring gesture controls. Effortlessly skip, pause, and speed up content with intuitive gestures. Redefine how you engage with videos!</p>
      </div>

      <AboutSection />

      <div className="intro-section">
        <div className="video-intro">

          <h2>Features of StreamSwipe</h2><br>
          </br>
          <p>
          Embark on a truly distinctive video playback adventure, where convenience converges with innovation through our advanced gesture controls. As you navigate the captivating realm of video content, our intuitive gestures revolutionize the way you engage with your preferred media.

Envision a seamless journey through your video library, effortlessly accessible at your fingertips. With the graceful simplicity of a double-tap, effortlessly skip forward or backward, elevating your command over the playback timeline. Experience the subtlety of a press and hold, allowing you to finely tune the playback speed to match your preferred tempo.

Our goal is to enrich your viewing experience with adaptable technology. Envisage a world where your gestures shape the narrative, establishing a harmonious connection between the viewer and the content. It's not just video playback; it's an immersive exploration of storytelling influenced by your interactions.

The intricacy of our gesture controls transcends mere convenience; it's a blend of user-centric design and state-of-the-art technology. As you delve into the nuances of our features, uncover the art of personalized engagement with your videos. Every gesture becomes a stroke, crafting a canvas of dynamic and responsive multimedia interaction.

Join us on this journey where innovation converges with entertainment, and every gesture contributes a new layer to your video-watching experience. Whether you're a casual viewer or a dedicated cinephile, our gesture controls redefine the limits of what's achievable, introducing a fresh dimension to the way you savor video content.

Welcome to the future of video playback – where the power is in your hands, quite literally.
</p>

        </div>

        <div className="play-video">
          {videoId && <VideoPlayer videoId={videoId} />} <br />
          <button onClick={(e) => { playVideo(e, 'cdn') }}>TO PLAY CLICK</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
