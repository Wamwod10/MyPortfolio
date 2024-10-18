import React, { useState, useEffect } from 'react'
import './navbar.scss';
import en from '../../translate/eng.json';
import uz from '../../translate/uzb.json';

const Navbar = () => {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
    const translations = language === 'en' ? en : uz;

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar__box">
                    <a href="" className="navbar__logo">W</a>
                    <ul className="navbar__list">
                        <li className="navbar__item"><a href="" className="navbar__link">{translations.home}</a></li>
                        <li className="navbar__item"><a href="#about" className="navbar__link">{translations.about}</a></li>
                        <li className="navbar__item"><a href="" className="navbar__link">{translations.skills}</a></li>
                        <li className="navbar__item"><a href="" className="navbar__link">{translations.project}</a></li>
                        <li className="navbar__item"><a href="" className="navbar__link">{translations.contact}</a></li>
                    </ul>
                    <div className="navbar__trn">
                        <span href="" className="navbar__uzb" onClick={() => setLanguage('uz')}>UZB </span>
                        <span href="" className='navbar__line'>|</span>
                        <span href="" className="navbar__eng" onClick={() => setLanguage('en')}> ENG</span>
                    </div>
                </div>
            </div>
            {/* <div className="navbar__main-line"></div> */}
        </div>
    )
}

export default Navbar