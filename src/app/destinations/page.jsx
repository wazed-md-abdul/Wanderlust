import DestinationCard from '@/components/destinations/DestinationCard';

const DestinationPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`,{
        method: 'GET'
    })
    const Destinations = await res.json();
    console.log(Destinations.length);


    return (
        <>
                    
            <div className="bg-white shadow-md -lg p-4 mb-4 gap-3 hover:bg-gray-100 transition duration-300  container mx-auto  ease-in-out grid grid-cols-1 md:grid-cols-4">
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