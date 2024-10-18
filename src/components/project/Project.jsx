import React, { useState, useEffect, useRef } from 'react';
import "./project.scss";

export const Project = () => {
    const projectRef = useRef(null)
    const projectReftitle = useRef(null)

    const fullText = "Welcome To My Projects";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleTitle, setIsTitleVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(projectRef.current);
                }
            });
        });

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsTitleVisible(true);
                    observer.unobserve(projectReftitle.current);
                }
            });
        });

        if (projectReftitle.current) {
            observer.observe(projectReftitle.current);
        }

        return () => {
            if (projectReftitle.current) {
                observer.unobserve(projectReftitle.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const typingInterval = setInterval(() => {
                if (index < fullText.length) {
                    setDisplayedText((prev) => prev + fullText[index]);
                    setIndex((prev) => prev + 1);
                } else {
                    clearInterval(typingInterval);
                }
            }, 100);

            return () => clearInterval(typingInterval);
        }
    }, [isVisible, index]);

    useEffect(() => {
        if (visibleTitle) {
        }
    }, [visibleTitle]);





    return (
        <div className="project">
            <section className='project__section'>
                <div className="project__section-1">
                    <div className="container">
                        <h2 className="project__title">{displayedText}</h2>
                        <a href="#project3" className="project__link"><img className='project__img' src="10.svg" alt="" /></a>
                        <div ref={projectRef}>
                        </div>
                    </div>
                </div>
                <div id='project3' className="project__section-2">
                    <div className="container">
                        <h2 className="project__title-2">About Nike Shoes and Prices</h2>
                        <p className="project__text-2">Nike is a leading brand in sports footwear and apparel. Their sneakers are made from high-quality materials, offering comfort for both athletes and everyday users. Prices vary by model, starting around $60 and reaching up to $300 for advanced sports models. Nike sneakers come in various designs and colors, seamlessly blending sport and style. They are an excellent choice for any activity.</p>
                        <a href="" className="header__link project__link-2">Go to the Website</a>
                    </div>
                </div>
                <div className="project__section-3">
                    <div className="container">
                        <h2 className="project__title-2">About SEO & Digital Marketing</h2>
                        <p className="project__text-2">SEO Digital is a digital marketing agency that provides services in search engine optimization (SEO), digital advertising, and content marketing. Established in 2023 in New York, the company focuses on creating strong online presence and driving growth for brands. Goal: SEO Digital aims to build a powerful digital presence for brands, ensure growth, and strengthen connections with consumers.</p>
                        <a href="" className="header__link project__link-2">Go to the Website</a>
                    </div>
                </div>
                <div className="project__section-4">
                    <div className="container">
                        <h2 className="project__title-2">About UzMobile Company's Advantages</h2>
                        <p className="project__text-2">Uzmobile is one of the telecommunications companies in Uzbekistan, established in 2006. It is state-owned and managed by the Ministry of Information Technologies and Communications of the Republic of Uzbekistan. Uzmobile provides mobile communication services, internet, and various additional services. The company offers 2G, 3G, and 4G networks and is known for its competitive tariff plans for users.</p>
                        <a href="" className="header__link project__link-2">Go to the Website</a>
                    </div>
                </div>
                <div className="project__section-5">
                    <div className="container">
                        <h2 className="project__title-2">About ClickHouse Online Shop</h2>
                        <p className="project__text-2">"Click House" is a company that produces innovative products in modern home furnishings. Their furniture features a self-cleaning function, while outdoor equipment can change color based on weather conditions. All items can be controlled by voice commands. The company aims to strengthen the connection between humans and nature and plans to realize this goal through its upcoming "Green Nature" project. Click House is a brand that combines innovation and aesthetics in home furnishings!</p>
                        <a href="https://click-house-ten.vercel.app/" target='blank' className="header__link project__link-2">Go to the Website</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project