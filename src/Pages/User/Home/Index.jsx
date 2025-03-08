import React from 'react'
import VideoThumbnail from './VideoThumbnail'
import BtsTape from './BtsTape';
import Review from './Review';
import Herobanner from './Herobanner';
import "react-router-dom"

export default function Index() {
    return (<>
        <section className='lg:px-4 py-3 h-auto'>
            <Herobanner></Herobanner>
            <div className="py-20 flex flex-col items-center justify-center ">
            <div className="flex flex-row items-center justify-center text-4xl text-amber-900 font-serif animate-fade-in">
                <span className="mr-2">Turning Moments into Memories.</span>
                <span className='place-content-center animate-bounce'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-18 h-12 text-red-500"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </span>
            </div>
        </div>
            <VideoThumbnail></VideoThumbnail>
            <BtsTape></BtsTape>
            <Review></Review>
        </section>

    </>)
}

