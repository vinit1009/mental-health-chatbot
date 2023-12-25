// src/pages/Home.js
import React from 'react';
import Chatbot from '../components/Chatbot';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Mental Health Chatbot</h1>
      <p>This is the home page where users can learn about the chatbot and how it can assist them.</p>
      {/* Additional content or components */}
    </div>
  );
  return (
    <div className="container">
      <h1>Welcome to the Mental Health Chatbot</h1>
      <p>This is the home page.</p>
      <Chatbot />
    </div>
  );
}

export default Home;
