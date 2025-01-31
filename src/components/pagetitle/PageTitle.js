import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return (
        <section className="breadcrumb-section">
            <div className="container">
                <div className="breadcrumb-wrap">
                    <h2>{props.pageTitle}</h2>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><span>{props.pagesub}</span></li>
                    </ul>
                </div>
            </div>
            <div className="shape">
                <svg width="480" height="460" viewBox="0 0 480 460" fill="none">
                    <circle cx="270" cy="270" r="270" fill="url(#paint0_radial_48_29)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_48_29" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(270 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="480" height="460" viewBox="0 0 480 460" fill="none">
                    <circle cx="270" cy="270" r="270" fill="url(#paint0_radial_48_291)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_48_291" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(270 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default PageTitle;


