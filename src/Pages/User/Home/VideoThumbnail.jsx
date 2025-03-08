import React, { useCallback } from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const api_url = process.env.REACT_APP_API_URL;

export default function VideoThumbnail() {
    const [isLoading, setIsLoading] = useState(false);
    const [clients, setClients] = useState([])
    const [homepageTags, setHomepageTags] = useState([])
    const [selectedTag, setSelectedTag] = useState("");

  
    const ytlink=[
        {
            src: "https://www.youtube.com/embed/Rrw2MGiZmFY",
            title: "Nikitha & Rahi | Wedding Film | 4k | Ankit Studios",
            height: "h-60 sm:h-48 lg:h-60"
        },
        {
            src: "https://www.youtube.com/embed/g0TfZX9m2vM",
            title: "PRATIK & RUTUJA | 4K PRE-WEDDING TEASER 2025 | LONAVALA",
            height: "h-96 sm:h-72 lg:h-96"
        },
        {
            src: "https://www.youtube.com/embed/7cqynucvY6w",
            title: "PRE WEDDING SHOOT IN {VANDRI LAKE} | 4K | Shubham & Sejal | ANKIT STUDIOS",
            height: "h-60 sm:h-48 lg:h-60"
        },
        {
            src: "https://www.youtube.com/embed/mBA8oUJd6iE",
            title: "Akhilesh & Sakshi | Pre Wedding teaser | Pune | 4K | Ankit Studios",
            height: "h-96 sm:h-72 lg:h-96"
        }
    ]
    return (<> <Link to="/films">
        <h1 className="inline-block lg:mb-8 sm:mb-4 sm:w-full sm:text-center lg:text-left px-4 py-0 lg:text-desktopHeadlineMedium transition-all delay-700 duration-75 lg:hover:underline sm:py-4 sm:text-desktopBodyLarge tracking-wider">
            Films
            <hr className='lg:hidden mx-auto border-[1px] w-8 border-slate-300' />
        </h1>
    </Link>
    <div className="w-full py-10 my-0">
        <div className="flex flex-col md:flex-row gap-6 lg:justify-center sm:justify-start px-0 sm:overflow-x-auto scrollbar-none sm:pl-2">
            {/* Video Container */}
            {ytlink.map((video, index) => (
                <div key={index} className="flex justify-center w-full">
                    <iframe
                        className={`w-full ${video.height} rounded-lg`}
                        src={video.src}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
        <div className='flex justify-center items-center h-full my-4'>
            <div className='text-xl font-serif text-red-500'>
                <span>
                    <a href="https://www.youtube.com/@AnkitStudios/featured">AnkitStudios</a>
                </span>
            </div>
        </div>
    </div>
</>)
}

// const VideoSkeletonLoader = () => (
//     <div className="animate-pulse bg-slate-200 lg:h-80 lg:w-1/3 relative my-9 sm:h-80 sm:w-80 sm:flex-none rounded-3xl">
//         <div className="relative h-full overflow-hidden">
//             <div className="w-full h-full rounded-3xl bg-slate-300"></div>
//             <div className="absolute bottom-6 left-6 text-white flex flex-col gap-0">
//                 <div className="flex items-center text-desktopBodySmall uppercase font-semibold tracking-wide">
//                     <span className="inline-block animate-pulse w-28 h-4 rounded-lg bg-slate-400 mr-2 my-4"></span>
//                     <span className="inline-block animate-pulse w-10 h-4 rounded-lg bg-slate-400"></span>
//                 </div>
//                 <div className="flex gap-2 text-desktopBodyMedium font-bold">
//                     <span className="inline-block animate-pulse w-10 h-4 rounded-lg bg-slate-400"></span>
//                     <span className="inline-block animate-pulse w-10 h-4 rounded-lg bg-slate-400"></span>
//                 </div>
//             </div>
//         </div>
//     </div>
// );
// const TagSkeletonLoader = () => (
//     <div className="flex gap-3 lg:justify-center sm:justify-start w-full sm:overflow-x-auto scrollbar-none sm:pl-2">
//         <button className={`px-4 py-1 rounded-3xl`} >
//             <span className="inline-block animate-pulse w-20 h-6 rounded-xl bg-slate-400"></span>
//         </button>
//     </div>
// )