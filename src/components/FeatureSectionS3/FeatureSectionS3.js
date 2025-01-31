import React from 'react';


// icon
import Icon1 from "../../images/feature/cn1.svg";
import Icon2 from "../../images/feature/cn2.svg";
import Icon3 from "../../images/feature/cn3.svg";
import Icon4 from "../../images/feature/cn4.svg";

const FeatureData = [
    {
        id: '1',
        Icon: Icon1,
        Title: "Business Strategy",
        Content: "Nam ornare ultricies scelerisque habitant. Netus volutpat faucibus pharetra dui blandit.",
    },
    {
        id: '2',
        Icon: Icon2,
        Title: "Financial Planning",
        Content: "Nam ornare ultricies scelerisque habitant. Netus volutpat faucibus pharetra dui blandit.",
    },
    {
        id: '3',
        Icon: Icon3,
        Title: "Problem Solving",
        Content: "Nam ornare ultricies scelerisque habitant. Netus volutpat faucibus pharetra dui blandit.",
    },
    {
        id: '4',
        Icon: Icon4,
        Title: "International Business",
        Content: "Nam ornare ultricies scelerisque habitant. Netus volutpat faucibus pharetra dui blandit.",
    },
]

const FeatureSectionS3 = () => {
    return (
        <section className="feature-section-s3">
            <div className="container-fluid">
                <div className="row">
                    {FeatureData.map((features, item) => (
                        <div className="col-xl-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={item}>
                            <div className="feature-card">
                                <div className="icon">
                                    <img src={features.Icon} alt="" />
                                </div>
                                <div className="content">
                                    <h3>{features.Title}</h3>
                                    <p>{features.Content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default FeatureSectionS3;