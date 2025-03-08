import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const [searchPlaceholder, setSearchPlaceholder] = useState('Search films here..');
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setSearchPlaceholder('Films');
            } else {
                setSearchPlaceholder('Search films here..');
            }
        };
        handleResize(); // Set initial placeholder
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearch = (e) => {
        if (e.key === "Enter" && searchQuery.trim() !== "") {
            navigate(`/search-result?query=${searchQuery}`);
        }
    };
    return (
        <>
            <div className="sm:hidden lg:block relative header-wrapper flex lg:py-2 lg:mb-4 sm:px-4 sm:pt-4 bg-primary_on rounded-t-2xl item-center sm:gap-4 sm:py-2">
                <div className="flex md:pr-5  lg:gap-8 items-center justify-between sm:h-12 sm:flex-auto sm:my-auto sm:gap-2 ">
                 <div className='font-serif text-2xl  flex flex-row gap-3'>
                    <div className='text-amber-900'>AnkitStudios</div>
                    <span>-</span>
                    <span className='items-center'>Art of Cinematic meets Wedding Photography.</span>
                </div>

                    <Link className="enquire-btn group flex justify-center  items-center gap-1 bg-secondary rounded-3xl px-4 py-1 text-mobileBodyMedium text-primary lg:w-30 lg:h-9 my-auto sm:h-10" to={"/contact"}>
                        <span className='whitespace-nowrap tracking-wide'>Enquire</span>
                        <svg className='transition-all group-hover:translate-x-2 flex-none lg:w-6 lg:h-6 sm:w-5 sm:h-4 text-blue-300 fill-slate-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </Link>
                </div>
            </div>
        </>
    )
}




