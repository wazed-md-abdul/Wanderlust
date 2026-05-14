import MyBookingCard from '@/components/mybookings/BookingsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    if (!user?.id) {
        return (
            <div className='container mx-auto flex justify-center items-center flex-col py-20'>
                <p className='text-center text-lg font-medium text-gray-200'>
                    Please log in to view your bookings.
                </p>
            </div>
        );
    }

    const res = await fetch(`http://localhost:5000/booking/${user.id}`);
    const data = await res.json();

    return (
        <div className='container mx-auto flex justify-center items-center flex-col'>
            <MyBookingCard data={data} />
        </div>
    );
};

export default MyBookingPage;