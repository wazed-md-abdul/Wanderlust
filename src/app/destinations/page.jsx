import DestinationCard from '@/components/destinations/DestinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch('http://localhost:5000/destination', {
        method: 'GET'
    })
    const Destinations = await res.json();
    console.log(Destinations.length); 
    
    
    return (
        <>
        <div  className="bg-white shadow-md rounded-lg p-4 mb-4 hover:bg-gray-100 transition duration-300  ease-in-out grid grid-cols-1 md:grid-cols-4">
            {
                Destinations.map((destination) => (
                    <div key={destination._id}>    
                        <DestinationCard destination={destination} />
                    </div>
                ))
            }
    </div>
        </>
    );
};

export default DestinationPage;