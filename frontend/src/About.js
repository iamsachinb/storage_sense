// About.js
import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="about-container">
            <h2>About This Project</h2>
            <p>
                This project is a machine maintenance prediction app that
                predicts the maintenance time needed for machines based on
                input parameters. It uses a trained machine learning model to
                provide accurate predictions and is built with React for the
                frontend and Flask for the backend.
            </p>
            <p>
                Users can input various parameters such as air temperature,
                process temperature, rotational speed, torque, and tool wear,
                and receive predictions on maintenance requirements.
            </p>
        </div>
    );
};

export default About;
