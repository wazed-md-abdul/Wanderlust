import React from 'react';
import { Avatar } from '@heroui/react';

const MyBookingCard = ({data}) => {
console.log(data);
 
    return (
        <>
        {
                data.map((user) => (
                    <div key={user?.destinationId} className="overflow-hidden rounded-3xl border w-full border-gray-800 bg-[#111111] shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">

            {/* Top Section */}
            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">

                {/* User Info */}
                <div className="flex items-center gap-4">

                    {/* Hero UI Avatar */}
                    <Avatar className="h-16 w-16 border-2 border-cyan-500">
                        <Avatar.Image
                            alt={user?.userName}
                            src={user?.userImage}
                        />

                        <Avatar.Fallback>
                            {user.userName?.slice(0, 2).toUpperCase()}
                        </Avatar.Fallback>
                    </Avatar>

                    <div>
                        <h2 className="text-xl font-bold text-white">
                            {user?.userName}
                        </h2>

                        <p className="text-sm text-gray-400">
                            Booking Confirmed
                        </p>
                    </div>
                </div>

                {/* Status */}
                <div>
                    <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white">
                        Confirmed
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800" />

            {/* Booking Info */}
            <div className="grid gap-5 p-6 md:grid-cols-3">

                {/* Destination */}
                <div className="rounded-2xl bg-cyan-950/30 p-5">
                    <p className="text-sm text-gray-400">
                        Destination
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-cyan-400">
                        {user?.destinationName}
                    </h3>
                </div>

                {/* Price */}
                <div className="rounded-2xl bg-green-950/30 p-5">
                    <p className="text-sm text-gray-400">
                        Total Price
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-green-400">
                        ${user?.destinationPrice}
                    </h3>
                </div>

                {/* Departure */}
                <div className="rounded-2xl bg-purple-950/30 p-5">
                    <p className="text-sm text-gray-400">
                        Departure Date
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-purple-400">
                        {new Date(user?.departureDate).toLocaleDateString()}
                    </h3>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 p-6 pt-0 md:flex-row">

                <button className="flex-1 rounded-2xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600">
                    View Booking
                </button>

                <button className="flex-1 rounded-2xl border border-red-500 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white">
                    Cancel Booking
                </button>
            </div>
        </div>
                ))
        }
        </>
    );
};

export default MyBookingCard;