// src/pages/Home.js
import React from 'react';
import Chatbot from '../components/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Welcome to the Mental Health Chatbot</h1>
      <p className="text-center">Your companion for mental wellness and support.</p>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-8">
          {/* You can add more content or a welcoming image here */}
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default Home;
