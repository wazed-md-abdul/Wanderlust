import React from 'react';

const DestinationPage = async () => {
    const res = await fetch('http://localhost:5000/destination', {
        method: 'GET'
    })
    const Destinations = await res.json();
    console.log(Destinations.length); 
    
    
    return (
        <>
            {
                Destinations.map((destination) => (
                    <div key={destination._id} className="bg-white shadow-md rounded-lg p-4 mb-4 hover:bg-gray-100 transition duration-300  ease-in-out">    
                        <h2 className="text-lg font-semibold mb-2">{destination.name}</h2>
                        <p className="text-gray-600">{destination.description}</p>
                    </div>
                ))
            }

        </>
    );
};

export default DestinationPage;