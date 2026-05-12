'use client'
import { useState } from "react";
import React from 'react';
import { DateField, Label } from "@heroui/react";
import { Toast, toast } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
const BookNowBtn = ({ destination }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [departureDate, setDepartureDate] = useState(null);
    console.log(new Date(departureDate));
    const handleBooking = async () => {
        const noop = () => {};
        const BookingData = {
            userId: user?.id,
            userName: user?.name,
            destinationId: destination._id,
            departureDate: new Date(departureDate),
            userImage: user?.image,
            destinationName: destination.destinationName,
            destinationPrice: destination.price
        }
        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(BookingData)
        });
        const data = await res.json();
  
 toast.success("Successfully Added", {
            actionProps: {
                className: "bg-success text-success-foreground",
                onPress: noop,
            },
            description: "Visit Destionations Page to see the added destination",
        })
    }



    return (

        <>
            <DateField className="w-[256px] mx-auto" name="date" onChange={setDepartureDate}>
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <button onClick={handleBooking} className="mt-8 w-full -2xl bg-cyan-500 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
                Book Now
            </button>
            <Toast.Provider />
        </>

    );
};

export default BookNowBtn;