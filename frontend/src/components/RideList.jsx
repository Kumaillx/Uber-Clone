import { useEffect, useState } from "react";
import axios from "axios";

const RideList = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/rides');
                setRides(response.data);
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };

        fetchRides();
    }, []);

    return (
        <div>
            <h1> Your Rides that were booked </h1>
            {rides.length == 0 ? <p> No rides Booked yet</p> : (
                <ul>
                    {rides.map((ride) => (
                        <li key={ride.id}>
                            <p>Pickup: {ride.pickup}</p>
                            <p>Dropoff: {ride.dropoff}</p>
                            <p>Date: {new Date(ride.date).toLocaleDateString()}</p>
                            <p>Time: {new Date(ride.time).toLocaleTimeString()}</p>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    )
}

export default RideList;