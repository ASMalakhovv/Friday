import React from 'react';
import {NavLink} from 'react-router-dom';
import {path} from '../routes/Pages';
import s from './Header.module.scss'

const Header = () => {

    const activeClass = (isActive: boolean): Object => {
        if (isActive) {
            return {color: '#dc6562'}
        }
        return {}
    }

    return (
        <div className={s.navLinks}>
            <NavLink to={path.test} style={({isActive}) => activeClass(isActive)}>TEST</NavLink>
            <NavLink to={path.login} style={({isActive}) => activeClass(isActive)}>LOGIN</NavLink>
            <NavLink to={path.profile} style={({isActive}) => activeClass(isActive)}>PROFILE</NavLink>
        </div>
    );
};

export default Header;