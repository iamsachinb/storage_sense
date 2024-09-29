import React, { useState } from "react";
import axios from "axios";
import './Predictor.css'

const Predictor = () => {
  const [airTemp, setAirTemp] = useState("");
  const [processTemp, setProcessTemp] = useState("");
  const [rotationalSpeed, setRotationalSpeed] = useState("");
  const [torque, setTorque] = useState("");
  const [toolWear, setToolWear] = useState("");
  const [maintenanceTime, setMaintenanceTime] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputParams = {
      airTemperature: parseFloat(airTemp),
      processTemperature: parseFloat(processTemp),
      rotationalSpeed: parseFloat(rotationalSpeed),
      torque: parseFloat(torque),
      toolWear: parseFloat(toolWear),
    };

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual endpoint
      const response = await axios.post('http://127.0.0.1:5000/predict', inputParams);

      setMaintenanceTime(response.data.maintenanceTime);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Air Temperature [K]"
          value={airTemp}
          onChange={(e) => setAirTemp(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Process Temperature [K]"
          value={processTemp}
          onChange={(e) => setProcessTemp(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rotational Speed [RPM]"
          value={rotationalSpeed}
          onChange={(e) => setRotationalSpeed(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Torque [Nm]"
          value={torque}
          onChange={(e) => setTorque(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Tool Wear [min]"
          value={toolWear}
          onChange={(e) => setToolWear(e.target.value)}
          required
        />
        <button type="submit">Predict Maintenance Time</button>
      </form>
      {maintenanceTime && (
        <h2>
          The machine will need maintenance in approximately{" "}
          {maintenanceTime.toFixed(2)} minutes of operation.
        </h2>
      )}
    </div>
  );
};

export default Predictor;
