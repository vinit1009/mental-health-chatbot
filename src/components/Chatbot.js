import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Function to dynamically load script
    const loadScript = (src, defer = false) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = defer;
      document.body.appendChild(script);
    };

    // Load Botpress chatbot scripts
    loadScript("https://cdn.botpress.cloud/webchat/v0/inject.js");
    loadScript("https://mediafiles.botpress.cloud/3b455217-ab09-4d57-b73e-1f75aa146c2c/webchat/config.js", true);

    return () => {
      // Cleanup: remove the scripts if the component unmounts
      document.querySelectorAll('script[src^="https://cdn.botpress.cloud"], script[src^="https://mediafiles.botpress.cloud"]').forEach(el => el.remove());
    };
  }, []);

  return (
    <div id="botpress-chatbot-container">
      {/* Botpress chatbot will be injected here */}
    </div>
  );
};

export default Chatbot;
