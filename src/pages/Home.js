import React from 'react';
import './home.css';

function Home() {
    return (
        <div className = "home-container">
            <h2>Welcome to Mental Health Chatbot</h2>
            <p>This project is more than just a platform; it's a tribute to the friends we've lost to mental health struggles. It's a reminder that even in our darkest moments, we are not alone.</p>
            
            <h3>Our Mission</h3>
            <p>We understand the deep impact of mental health issues and the importance of having a safe space to share your concerns. That's why we've introduced an <b>AI-powered chatbot, located at the bottom right corner of this page.</b> This chatbot is your private space to express yourself, share your worries, and seek guidance.</p>

            <h3>Need More Help?</h3>
            <p>For those who need further assistance, we've compiled a list of national U.S. helpline numbers and forums where you can find additional support:</p>
            <ul>
                <li>National Suicide Prevention Lifeline: <b>1-800-273-TALK (1-800-273-8255)</b></li>
                <li>Crisis Text Line: <b>Text HOME to 741741</b></li>
                <li>NAMI Helpline (National Alliance on Mental Illness): <b>1-800-950-NAMI (1-800-950-6264)</b></li>
                <li>SAMHSA National Helpline (Substance Abuse and Mental Health Services Administration): <b>1-800-662-HELP (1-800-662-4357)</b></li>
                <li>The Trevor Project (LGBTQ Youth): <b>1-866-488-7386</b></li>
                <li>Veterans Crisis Line: <b>Dial 1-800-273-TALK (1-800-273-8255) and press 1</b></li>
            </ul>

            <p>Remember, seeking help is a sign of strength. You're not alone in this journey.</p>
            <p>Vinit Shah</p>

            <p><b><font size = "5">AI powered CHATBOT is located on the bottom-right corner of the page, with a message icon.</font></b></p>
        </div>
    );
}

export default Home;
