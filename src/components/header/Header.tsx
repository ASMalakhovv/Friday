import React from 'react';
import {NavLink} from 'react-router-dom';
import {path} from '../pages/Pages';

const Header = () => {
    return (
        <div>
            <div className="navigation">
                <NavLink to={path.test} className="navLink-navigation">TEST</NavLink>
                <NavLink to={path.login} className="navLink-navigation">LOGIN</NavLink>
                <NavLink to={path.signup} className="navLink-navigation">REGISTRATION</NavLink>
                <NavLink to={path.profile} className="navLink-navigation">PROFILE</NavLink>
                <NavLink to={path.passwordReset} className="navLink-navigation">RESET PASSWORD</NavLink>
                <NavLink to={path.passwordNew} className="navLink-navigation">NEW PASSWORD</NavLink>
            </div>
        </div>
    );
};

export default Header;