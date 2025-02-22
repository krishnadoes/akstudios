import React, { useEffect, useRef, useState } from 'react'
const BtsTape = () => {
    const btsImageUrl = [
        { key: 1, url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
        { key: 2, url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
        { key: 3, url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
        { key: 4, url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
        { key: 5, url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" }
    ];

    const btsTapeRef = useRef(null);
    const scrollIntervalRef = useRef(null);

    // Function to scroll images to the left
    const scrollLeft = () => {
        if (btsTapeRef.current) {
            btsTapeRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        }
    };

    // Start scrolling when the component mounts
    useEffect(() => {
        scrollIntervalRef.current = setInterval(scrollLeft, 30); // Adjust speed here
        return () => clearInterval(scrollIntervalRef.current); // Clear interval on unmount
    }, []);

    return (
        <div className="bts-text-content flex flex-col items-center gap-1 lg:mt-20 mb-10 sm:mt-0 px-4">
            <h1 className='text-primary lg:text-desktopBodyLarge font-medium text-center md:text-mobileHeadlineSmall sm:text-mobileBodyLarge'>
                Behind Every Beautiful Shot is a Dedicated Team
            </h1>
            <div className="bts-image bg-tertiary p-2 transform -rotate-2">
                <div className="bts-wrapper flex justify-center gap-2 px-4 overflow-hidden">
                    <div ref={btsTapeRef} className="flex gap-2 whitespace-nowrap">
                        {btsImageUrl.length ? (
                            btsImageUrl.map((btsUrl) => (
                                <div key={btsUrl.key} className="flex-none lg:w-72 lg:h-56 sm:w-52 sm:h-36 overflow-hidden">
                                    <img className='w-full h-full rounded-xl object-cover' src={btsUrl.url} alt={`bts-image-${btsUrl.key}`} />
                                </div>
                            ))
                        ) : (
                            <div>No BTS Image</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BtsTape;