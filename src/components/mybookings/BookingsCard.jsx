import React from 'react';
import { Avatar } from '@heroui/react';
import { DeleteAlertForMyBookings } from './DeleteAlertForMyBookings';

const MyBookingCard = ({ data }) => {
  if (!data?.length) {
    return (
      <div className="w-full rounded-3xl border border-gray-800 bg-[#111111] p-8 text-center text-gray-300">
        No bookings found.
      </div>
    );
  }

  return (
    <>
      {data?.map((user) => (
        <div key={user?.destinationId} className="overflow-hidden rounded-3xl border w-full border-gray-800 bg-[#111111] shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">

          {/* Top Section */}
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">

            {/* User Info */}
            <div className="flex items-center gap-4">

              {/* Hero UI Avatar */}
              <Avatar className="h-16 w-16 border-2 border-cyan-500">
                {user?.userImage ? (
                  <Avatar.Image
                    alt={user?.userName ?? 'Avatar'}
                    src={user.userImage}
                  />
                ) : null}

                <Avatar.Fallback>
                  {user?.userName?.slice(0, 2).toUpperCase() ?? 'GU'}
                </Avatar.Fallback>
              </Avatar>

              <div>
                <h2 className="text-xl font-bold text-white">
                  {user?.userName ?? 'Guest'}
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
                {user?.destinationName ?? 'Unknown'}
              </h3>
            </div>

            {/* Price */}
            <div className="rounded-2xl bg-green-950/30 p-5">
              <p className="text-sm text-gray-400">
                Total Price
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-400">
                ${user?.destinationPrice ?? '0.00'}
              </h3>
            </div>

            {/* Departure */}
            <div className="rounded-2xl bg-purple-950/30 p-5">
              <p className="text-sm text-gray-400">
                Departure Date
              </p>

              <h3 className="mt-2 text-lg font-bold text-purple-400">
                {user?.departureDate ? new Date(user.departureDate).toLocaleDateString() : 'N/A'}
              </h3>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 p-6 pt-0 md:flex-row">
            <DeleteAlertForMyBookings userId={user?._id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MyBookingCard;