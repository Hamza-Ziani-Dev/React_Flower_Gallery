import React from 'react';
// the hook
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"

import './Header.css';

const Header = (props) => {
    const [ trans, i18n ] = useTranslation();

    return (
        <header id="header">
            <Link to="/" className="logo"><strong>{ trans ('title')}</strong></Link>
            <ul className="icons">
                {props.loggedIn ? 
                <li><Link to="/logout" className="icon solid fa-sign-out-alt"><span className="label">Logout</span></Link></li>
                :
                <li><Link to="/login" className="icon solid fa-sign-in-alt"><span className="label">Login</span></Link></li>
                }
                <li>
                { i18n.language === 'en' && <button onClick={() => {
                    i18n.changeLanguage('ar');
                }}>ar</button>}
                { i18n.language === 'ar' && <button onClick={() => {
                    i18n.changeLanguage('en');
                }}>en</button>}
                </li>
            </ul>
        </header>
    );
}

export default Header;