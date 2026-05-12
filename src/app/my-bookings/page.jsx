import MyBookingCard from '@/components/mybookings/BookingsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session =  await auth.api.getSession({
            headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
        method: 'GET'
    })

    
    const data = await res.json();
    console.log(data);
    
    return (
        <div className='container mx-auto flex justify-center items-center flex-col'>
            <MyBookingCard data={data} />
            
        </div>
    );
};

export default MyBookingPage;