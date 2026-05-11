'use client';

import Image from 'next/image';
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
        imageUrl,
        price,
        destinationName,
        duration,
        country,
        description,
    } = destination;

    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            
            {/* Image */}
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    loader={imageUrl.startsWith('https://images.unsplash.com/') ? unsplashLoader : undefined}
                    src={imageUrl}
                    alt={destinationName}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Price Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-semibold text-blue-600 shadow">
                    ${price}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">
                
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">
                        {destinationName}
                    </h2>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
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
                <button className="mt-3 w-full rounded-xl bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default DestinationCard;
