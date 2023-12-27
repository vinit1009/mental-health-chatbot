import React, { useEffect } from 'react';
import particlesJS from 'particles.js';

const ParticlesBackground = () => {
  useEffect(() => {
    if (particlesJS) {
      particlesJS.load('particles-background', 'C:/Users/shahv/Documents/mental-health-chatbot/mental-health-chatbot/node_modules/particles.js/demo/particles.json', function() {
        console.log('Particles.js loaded.');
      });
    } else {
      console.error('particlesJS not found');
    }
  }, []);

  return <div id="particles-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>;
};

export default ParticlesBackground;
