import React from 'react'
import facebookLogo from '../Asset/facebookLogo.svg'
import instagramLogo from '../Asset/instagramLogo.svg'
import twitterLogo from '../Asset/twitterLogo.svg'
import youtubeLogo from '../Asset/youtubeLogo.svg'
import { useStudioDetails } from '../Context/StudioDetailsContext'
import { Link } from "react-router-dom"

export default function Footer() {
    const { studioName, studioLogo,  studioSocials } = useStudioDetails();

    const socialMediaLinks = [
        { name: 'Instagram', link: 'https://www.instagram.com/ankit_studios/', logo: instagramLogo },
        { name: 'YouTube', link: 'https://www.youtube.com/@AnkitStudios/featured', logo: youtubeLogo },
    ];
    const studioContact = "+919665563749"; // Phone number
const studioAddress = "Ankit studios Office no. 406 Sai siddhi building, near Radha Krishna hotel, taki road, nallasopara east"; // Address
const studioEmail = "ankitstudio07@gmail.com"; // Email
    return (<>
        <footer className="w-full bg-tertiary text-[#fcebd1] mt-20 rounded-t-[5rem] lg:rounded-t-[5rem] sm:rounded-t-3xl">
            <div className="w-full mx-auto px-6 py-6 flex flex-col gap-6">
                {/* Logo & Contact Section */}
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
                       <a href="/"><img src='logo.png' alt="studio-logo" className="w-full h-full object-cover" /></a> 
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-2 sm:bg-[#85848440] sm:rounded-3xl sm:shadow-md sm:backdrop-blur-sm min-h-50 items-center sm:py-4">
            {['Phone', 'Address', 'Email'].map((label, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                    <h3 className="font-bold text-mobileBodyMedium">{label}</h3>
                    <p className=''>
                        {index === 0 ? studioContact : index === 1 ? studioAddress : studioEmail || (
                            <span className="animate-pulse bg-slate-400 rounded-xl w-24 h-6" />
                        )}
                    </p>
                </div>
            ))}
        </div>
                </div>

                {/* Social Links Section */}
                <div className="flex flex-col items-center gap-4 ">
                    <h2 className="font-bold text-mobileBodyMedium">Social</h2>
                    <div className="flex gap-4">
            {socialMediaLinks.map((social, index) => (
                social.link ? ( // Only render the link if it exists
                    <Link key={index} to={social.link} target="_blank" rel="noopener noreferrer">
                        <img src={social.logo} alt={`${social.name} Icon`} className="w-8 h-8 sm:w-10 sm:h-10" />
                    </Link>
                ) : null
            ))}
        </div>
                </div>
            </div>

            {/* Enquire Button */}
            <div className="flex justify-center my-4 ">
                <Link to="/contact" className="group flex items-center bg-[#f7dcb2] text-black px-4 py-2 rounded-3xl transition-transform hover:translate-x-2">
                    <span>Enquire Now</span>
                    <svg className="w-6 h-6 ml-2 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </Link>
            </div>

            {/* Footer Note */}
            <div className="text-center px-8 text-sm lg:text-desktopBodySmall sm:pb-24 md:pb-10">
                © 2024 - {studioName || "Ankit Studios"} | All Rights Reserved.
            </div>
        </footer>


    </>)
}
