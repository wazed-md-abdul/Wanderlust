'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const unsplashLoader = ({ src, width, quality }) => {
    const url = new URL(src);
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', (quality || 75).toString());
    return url.toString();
};

const DestinationCard = ({ destination }) => {
    const {
        image,
        price,
        destinationName,
        duration,
        country,
        description,
    } = destination;

    return (
        <div className="group bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl overflow-hidden  ">

            
            {/* Image */}
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    loader={typeof image === 'string' && image.startsWith('https:') ? unsplashLoader : undefined}
                    src={image ?? '/assets/Wanderlast.png'}
                    alt={destinationName}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Price Badge */}
                <div className="absolute right-4 top-4  bg-white px-4 py-1 text-sm font-semibold text-cyan-500 shadow">
                    ${price}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">
                
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">
                        {destinationName}
                    </h2>

                    <span className=" bg-blue-100 px-3 py-1 text-xs font-medium text-cyan-500">
                        {duration}
                    </span>
                </div>

                <p className="text-sm font-medium text-gray-500">
                    📍 {country}
                </p>

                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {description}
                </p>

                {/* Button */}
                <Link
                    href={`/destinations/${destination._id}`}
                >
                <button className="mt-3 w-full  bg-cyan-500 py-2 font-medium text-white transition hover:bg-blue-700">
              Book Now
                </button> 
                    </Link>
            </div>
        </div>
    );
};

export default DestinationCard;
