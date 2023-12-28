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
    loadScript("https://mediafiles.botpress.cloud/f4075590-ef0d-4cca-9efa-b5231f83d54d/webchat/config.js", true);

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
