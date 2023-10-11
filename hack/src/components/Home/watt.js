import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sensor = () => {
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setSensorData(response.data.sensor_value);
        setError(null);
      } catch (error) {
        setError('Error fetching data. Please make sure the server is running.');
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    <div className='l1'>
      <h6>Current consuming watts</h6>
      {error ? <p>{error}</p> : <p>{sensorData !== null ? sensorData : 'Loading...'}</p>}
    </div>
    <div className='l1'><span>Current(I):{(sensorData*12*60)/230}</span></div>
    </>

  );
};

export default Sensor;
