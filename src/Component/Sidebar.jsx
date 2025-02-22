import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation, NavLink } from 'react-router-dom'
import { useStudioDetails } from '../Context/StudioDetailsContext';

export default function Sidebar() {
    const location = useLocation();
    const { studioLogo } = useStudioDetails();
    const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if (e.key === "Enter" && searchQuery.trim() !== "") {
            setIsMobileSidebarVisible(false)
            navigate(`/search-result?query=${searchQuery}`);
        }
    };

    return (<>
        <div className={` fixed lg:block lg:left-0 lg:top-0 lg:w-36  lg:p-0 lg:rounded-none lg:h-full z-10 box-border  sm:bottom-2 sm:left-0 sm:w-screen sm:h-fit sm:px-2 sm:pt-3 sm:flex sm:justify-center sm:z-[99999] lg:z-auto ${location.pathname === '/contact' ? "sm:hidden md:flex" : ""}  `}>

            <div className="lg:flex lg:justify-center lg:items-center w-full h-1/4 flex items-center justify-center py-4 lg:rounded-br-3xl bg-primary_on sm:hidden ">
                <div className="w-28 h-28 rounded-full overflow-hidden ">
                    <img className='w-full h-full bg-center object-cover' src='logo.png' alt="studio-logo" />
                </div>
            </div>

            <div className="max-w-full lg:h-3/4 lg:px-4 lg:block text-desktopBodySmall font-primary text-primary lg:rounded-none lg:rounded-tr-3xl  lg:bg-primary_on lg:py-8
             sm:w-full sm:flex sm:flex-col sm:bg-transparent  ">
                <div className={`header relative lg:hidden  w-full flex justify-between item:center ${isMobileSidebarVisible ? "rounded-t-3xl" : "rounded-full"} px-4 py-2 bg-tertiary_on`}>
                    <div className="logo absolute left-0 -top-8 w-full z-10">
                        <Link to={"/"} className="block w-fit mx-auto">
                            <img
                                className='sm:w-20 sm:h-20 rounded-full object-cover bg-center '
                                src={studioLogo} alt="studio-logo" />
                        </Link>
                    </div>
                    <div className="menu-btn z-50">
                        <button className="md:px-7 sm:px-4 py-2 rounded-full text-white border-[1px] border-slate-500 bg-tertiary md:text-mobileBodyLarge sm:text-mobileBodySmall font-semibold"
                            onClick={() => setIsMobileSidebarVisible(prev => !prev)}>
                            {
                                isMobileSidebarVisible ? "Close" : "Menu"
                            }
                        </button>
                    </div>
                    <div className="enquire-btn md:px-7 sm:px-4 py-2 rounded-full bg-secondary md:text-mobileBodyLarge sm:text-mobileBodySmall font-semibold z-50">
                        <Link to={"/contact"} className=""
                        >Enquire</Link>
                    </div>
                </div>
                <div className={`menus lg:hidden full-side-bar min-h-96 w-full ${isMobileSidebarVisible ? "block" : "hidden"} overflow-hidden rounded-none bg-tertiary_on rounded-b-3xl flex flex-col px-3 py-2 space-y-2 tracking-widest`}>
                    
                    <div className="home"
                        onClick={() => setIsMobileSidebarVisible(prev => prev ? !prev : prev)}>
                        <NavLink to="/"
                            className={({ isActive }) => `flex items-center gap-3 ${isActive ? "bg-slate-200 text-black" : "text-white"} px-2 py-1 text-sm  rounded-2xl`}>
                            <svg className='w-7 h-7 fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z" /></svg>
                            <span className=''>Home</span>
                        </NavLink>
                    </div>
               
                    <div className="photos"
                        onClick={() => setIsMobileSidebarVisible(prev => prev ? !prev : prev)}>
                        <NavLink to="/photos"
                            className={({ isActive }) => `flex items-center gap-3 ${isActive ? "bg-slate-200 text-black" : "text-white"} px-2 py-1 text-sm  rounded-2xl`}>
                            <button className=''>
                                <svg className='w-7 h-7 fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M480-267q72 0 121-49t49-121q0-73-49-121.5T480-607q-73 0-121.5 48.5T310-437q0 72 48.5 121T480-267Zm0-60q-48 0-79-31.5T370-437q0-48 31-79t79-31q47 0 78.5 31t31.5 79q0 47-31.5 78.5T480-327ZM140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240l73 87h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120H140Zm340-60h340v-513H645l-73-87h-92v600Z" /></svg>
                            </button>
                            <span className=''>Photos</span>
                        </NavLink>
                    </div>
                    <div className="contact"
                        onClick={() => setIsMobileSidebarVisible(prev => prev ? !prev : prev)}>
                        <NavLink to="/contact"
                            className={({ isActive }) => `flex items-center gap-3 ${isActive ? "bg-slate-200 text-black" : "text-white"} px-2 py-1 text-sm  rounded-2xl`}>
                            <svg className='w-7 h-7 fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" /></svg>
                            <span className=''>Contact</span>
                        </NavLink>
                    </div>
                    
                </div>
                <div className="sm:hidden lg:block desktop-menu">
                    <div className="home">
                        <NavLink to="/" className='flex items-center gap-2 px-3 py-2 my-2  bg-[#e8c6b3] bg-[rgba(182,181,181,0.25)] sm:shadow-[0_2px_2px_0_rgba(31,38,135,0.37)] lg:shadow-none backdrop-blur-sm border border-[rgba(255,255,255,0.18)] hover:opacity-50 transition-all duration-200 rounded-l-2xl'>
                            <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z" /></svg>
                            <span className='sm:hidden lg:block '>Home</span>
                        </NavLink>
                    </div>
                 
                    <div className="photos">
                        <NavLink to="/photos" className='flex items-center gap-2 px-3 py-2 my-2  bg-[#e8c6b3] bg-[rgba(182,181,181,0.25)] sm:shadow-[0_2px_2px_0_rgba(31,38,135,0.37)] lg:shadow-none backdrop-blur-sm border border-[rgba(255,255,255,0.18)] hover:opacity-50 transition-all duration-200 rounded-md'>
                            <button className=''>
                                <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M480-267q72 0 121-49t49-121q0-73-49-121.5T480-607q-73 0-121.5 48.5T310-437q0 72 48.5 121T480-267Zm0-60q-48 0-79-31.5T370-437q0-48 31-79t79-31q47 0 78.5 31t31.5 79q0 47-31.5 78.5T480-327ZM140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240l73 87h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120H140Zm340-60h340v-513H645l-73-87h-92v600Z" /></svg>
                            </button>
                            <span className='sm:hidden lg:block '>Photos</span>
                        </NavLink>
                    </div>
                    <div className="contact">
                        <NavLink to="/contact" className='flex items-center gap-2 px-3 py-2 my-2  bg-[#e8c6b3] bg-[rgba(182,181,181,0.25)] sm:shadow-[0_2px_2px_0_rgba(31,38,135,0.37)] lg:shadow-none backdrop-blur-sm border border-[rgba(255,255,255,0.18)] hover:opacity-50 transition-all duration-200 rounded-md'>
                            <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" /></svg>
                            <span className='sm:hidden lg:block '>Contact</span>
                        </NavLink>
                    </div>
           
                </div>
            </div>
        </div>
    </>)
}