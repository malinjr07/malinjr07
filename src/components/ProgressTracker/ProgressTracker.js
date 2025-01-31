import React, { useEffect } from 'react';

const ProgressTracker = () => {
    useEffect(() => {
        const block = document.querySelectorAll('.block');

        block.forEach(item => {
            let numElement = item.querySelector('.num');
            let num = parseInt(numElement.innerText);
            let count = 0;
            let time = 2000 / num;
            let circle = item.querySelector('.circle');

            const intervalID = setInterval(() => {
                if (count === num) {
                    clearInterval(intervalID);
                } else {
                    count += 1;
                    numElement.innerText = count;
                }
            }, time);
            circle.style.strokeDashoffset = 503 - (503 * (num / 100));
            return () => clearInterval(intervalID);
        });
    }, []);



    return (
        <div className="skill-s2">
            <div className="progres-card">
                <div className="block">
                    <div className="box"></div>
                    <p className="number">
                        <span className="num">75</span>
                        <span className="sub"> %</span>
                    </p>
                    <svg className="svg">
                        <defs>
                            <linearGradient id="gradientStyle">
                                <stop offset="0%" stopColor="#C4EF17" />
                                <stop offset="100%" stopColor="#C4EF17" />
                            </linearGradient>
                        </defs>
                        <circle className="circle" cx="85" cy="85" r="75" />
                    </svg>
                </div>
                <h3 className="title">Website Design</h3>
            </div>
            <div className="progres-card">
                <div className="block">
                    <div className="box"></div>
                    <p className="number">
                        <span className="num">65</span>
                        <span className="sub"> %</span>
                    </p>
                    <svg className="svg">
                        <defs>
                            <linearGradient id="gradientStyle1">
                                <stop offset="0%" stopColor="#C4EF17" />
                                <stop offset="100%" stopColor="#C4EF17" />
                            </linearGradient>
                        </defs>
                        <circle className="circle" cx="85" cy="85" r="75" />
                    </svg>
                </div>
                <h3 className="title">App Design</h3>
            </div>
            <div className="progres-card">
                <div className="block">
                    <div className="box"></div>
                    <p className="number">
                        <span className="num">85</span>
                        <span className="sub"> %</span>
                    </p>
                    <svg className="svg">
                        <defs>
                            <linearGradient id="gradientStyle2">
                                <stop offset="0%" stopColor="#C4EF17" />
                                <stop offset="100%" stopColor="#C4EF17" />
                            </linearGradient>
                        </defs>
                        <circle className="circle" cx="85" cy="85" r="75" />
                    </svg>
                </div>
                <h3 className="title">Graphic Design</h3>
            </div>

        </div>
    );
};

export default ProgressTracker;