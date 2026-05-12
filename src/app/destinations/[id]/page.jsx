
import BookNowBtn from '@/components/destinations/BookNowBtn';
import { DeleteAlert } from '@/components/destinations/DeleteAlert';
import { EditModal } from '@/components/destinations/EditModal';
import ImageComponent from '@/components/destinations/Image';
import Image from 'next/image';
import React from 'react';

const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    const {
        image,
        price,
        destinationName,
        duration,
        country,
        description,
    } = destination;

    return (
        <>
            <div className='container mx-auto flex justify-end mt-12 gap-4'>
                <EditModal destination={destination} />
                <DeleteAlert destination={destination}> </DeleteAlert>
            </div>
            <div className="mx-auto max-w-6xl overflow-hidden -3xl bg-white shadow-xl my-7">

                {/* Hero Image */}
                <ImageComponent image={image} destinationName={destinationName} country={country} />
                {/* Content */}
                <div className="grid gap-10 p-8 md:grid-cols-3">

                    {/* Left Content */}
                    <div className="space-y-6 md:col-span-2">
                        <div>
                            <h2 className="mb-3 text-2xl font-bold text-gray-800">
                                About This Destination
                            </h2>

                            <p className="leading-relaxed text-gray-600">
                                {description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">



                            <div className="-2xl bg-green-50 p-4 text-center">
                                <p className="text-sm text-gray-500">
                                    Duration
                                </p>

                                <h3 className="mt-1 font-semibold text-green-600">
                                    {duration}
                                </h3>
                            </div>

                            <div className="-2xl bg-pink-50 p-4 text-center">
                                <p className="text-sm text-gray-500">
                                    Price
                                </p>

                                <h3 className="mt-1 font-semibold text-pink-600">
                                    ${price}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div className="-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">

                        <h2 className="text-2xl font-bold text-gray-800">
                            Book Your Trip
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Reserve your dream destination today.
                        </p>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">
                                    Destination
                                </span>

                                <span className="font-semibold">
                                    {destinationName}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">
                                    Duration
                                </span>

                                <span className="font-semibold">
                                    {duration}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">
                                    Price
                                </span>

                                <span className="text-xl font-bold text-cyan-600">
                                    ${price}
                                </span>
                            </div>
                            
                            <BookNowBtn destination={destination} />
                        </div>


                    </div>
                </div>
            </div>


        </>
    );
};

export default DestinationDetailsPage;