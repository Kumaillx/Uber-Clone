import { useState } from 'react';
import axios from 'axios';

const RideForm = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    // Prevent the default form submission
    e.preventDefault();
    // Send a POST request to the backend to book a ride
    try {
      await axios.post('http://localhost:5000/api/rides', {
        pickup,
        dropoff,
        date,
        time,
      });
      alert('Ride booked successfully!');
      setPickup(''); setDropoff(''); setDate(''); setTime('');
    } 
    
    catch (error) 
    {
      alert('Error booking ride.');
    }
  };

  return (
    <form className="ride-form" onSubmit={handleSubmit}>
      
      <input type="text" placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} required />
      <input type="text" placeholder="Dropoff Location" value={dropoff} onChange={(e) => setDropoff(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      
      <button type="submit">Book Ride</button>
    
    </form>
  );
};

export default RideForm;