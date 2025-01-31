import React from 'react'


const About = (props) => {



    return (
        <section id="about" className={"" + props.hclass} >
            <div className="wraper">
                <div className="section-top-content">
                    <h2 className="poort-text poort-in-right">About Me</h2>
                    <h3 className="poort-text poort-in-right">Design is My Passion, Which Create Me More
                        Professional.
                    </h3>
                    <h4 className="scroll-text-animation" data-animation="fade_from_bottom">I have 
                        <span> 10+ </span> 
                        years of experiences in this design field for give you better
                        services.</h4>
                    <p className="scroll-text-animation" data-animation="fade_from_bottom">Posuere vestibulum
                        feugiat a
                        scelerisque aliquam id in neque. Commodo aenean non enim lacus
                        eleifend. Semper amet facilisis tempor consequat aliquet vel elementum faucibus. Ac
                        vel enim
                        viverra id tincidunt imperdiet nisl auctor odio. Dignissim habitant volutpat viverra
                        quis.
                    </p>
                </div>
                <ul className="scroll-text-animation" data-animation="fade_from_bottom">
                    <li>Vestibulum nisl tempor enim pretium vulputate venenatis.</li>
                    <li>At donec interdiet adipiscing veptubtl cursus.</li>
                    <li>Magna enim viverra vitae egestas interdum lobortis.</li>
                </ul>
            </div>
            <div className="line-shape"></div>
        </section>
    )
}

export default About;