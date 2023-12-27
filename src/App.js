import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="chatbot-container">
        <Home />
        <Chatbot />
      </div>
      <Footer />
    </div>
  );
}

export default App;
