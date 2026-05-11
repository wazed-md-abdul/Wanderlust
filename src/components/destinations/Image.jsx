"use client"
import React from 'react';
import Image from 'next/image';
const ImageComponent = ({imageUrl, destinationName, country}) => {
    const unsplashLoader = ({ src, width, quality }) => {
            const url = new URL(src);
            url.searchParams.set('auto', 'format');
            url.searchParams.set('fit', 'crop');
            url.searchParams.set('w', width.toString());
            url.searchParams.set('q', (quality || 75).toString());
            return url.toString();
        };
    
    return (
        <div className="relative h-[400px] w-full">
                    <Image
                        loader={imageUrl.startsWith('https://images.unsplash.com/') ? unsplashLoader : undefined}
                        src={imageUrl}
                        alt={destinationName}
                        fill

                        className="object-cover transition duration-500 group-hover:scale-110"
                    />


                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute bottom-8 left-8 text-white">
                        <h1 className="text-4xl font-bold">
                            {destinationName}
                        </h1>

                        <p className="mt-2 text-lg">
                            📍 {country}
                        </p>
                    </div>
                </div>

    );
};

export default ImageComponent;