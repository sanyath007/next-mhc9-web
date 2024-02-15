import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLine, FaMapMarkedAlt } from 'react-icons/fa'

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100064648815470" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaFacebook />
            </a>
            <a href="https://twitter.com/fN0pnkdyGrckiLh" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com/mentalhealthcenter_9" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@user-vf2ep3tx6h" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaYoutube />
            </a>
            <a href="https://line.me/ti/p/@229xqzio" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaLine />
            </a>
            <Link href="/contact" className="hover:text-gray-300">
                <FaMapMarkedAlt />
            </Link>
        </div>
    )
}

export default SocialIcons