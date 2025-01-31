
import { Link } from "react-router-dom";


const PricingData = [
    {
        id: '1',
        type: 'Basic',
        price: 125,
        features: [
            'Support 6 months',
            'Work with both weekends',
            'Design with Figma',
            "Don't need wireframe or anything",
            'Remote/Online',
            'Your project always be priority'
        ]
    },
    {
        id: '2',
        type: 'Basic',
        price: 125,
        features: [
            'Support 6 months',
            'Work with both weekends',
            'Design with Figma',
            "Don't need wireframe or anything",
            'Remote/Online',
            'Your project always be priority'
        ]
    }
];


const PricingSection = (props) => {
    

    return (
        <section className={"" + props.hclass}>
            <div className="wraper">
                <div className="section-top-content">
                    <h2 className="poort-text poort-in-right">Pricing</h2>
                    <h3 className="poort-text poort-in-right">My Pricing Plan</h3>
                </div>
                <div className="row">
                    {PricingData.map((Pricing, Pky) => (
                        <div className="col-lg-6 col-md-6 scroll-text-animation" data-animation="fade_from_bottom" key={Pky}>
                            <div className="pricing-card">
                                <div className="top-content">
                                    <span>{Pricing.type}</span>
                                    <h2>${Pricing.price} <span>/ Per Month</span></h2>
                                </div>
                                <div className="buttom-content">
                                    <ul>
                                        {Pricing.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                    <Link to="#">Choose Plan</Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="shape">
                <svg width="352" height="352" viewBox="0 0 352 352" fill="none">
                    <circle cx="176" cy="176" r="176" fill="url(#paint0_radial_56_1808)" fillOpacity="0.4" />
                    <defs>
                        <radialGradient id="paint0_radial_56_1808" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(176 176) rotate(90) scale(176)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="line-shape">
                <span></span>
            </div>
        </section>
    )
}

export default PricingSection;