import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import './header.scss';
import en from '../../translate/eng.json';
import uz from '../../translate/uzb.json';

const Header = () => {
    
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
    const translations = language === 'en' ? en : uz;

    console.log(translations);
    
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <header className='header' >
            <div className="container">
                <div className='header__imageHolder'>
                    <img className='header__img' src="6.webp" alt="" />
                </div>
                <div className="header__box">
                    <h2 className="header__sec-title">I'm a Web Developer</h2>
                    <h1 className="header__title">Hello Everyone <br /> I'm Wamwod</h1>
                    <p className="header__txt">Freelancer Web & Web Developer & Love To Code</p>
                    <a href="" className="header__link">Learn More...</a>
                </div>
            </div>
        </header>
    )
}

export default Header