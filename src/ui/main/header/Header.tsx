import React from 'react';
import {NavLink} from 'react-router-dom';
import {path} from '../routes/Pages';
import s from './Header.module.scss'
import SuperButton from "../../common/SuperButton/SuperButton";
import {logOutTC} from "../../features/profile/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../../hooks/useReactRedux";

const Header = () => {

    const dispatch = useAppDispatch()
    const profileId: null | string = useAppSelector(state => state.profile._id)


    const activeClass = (isActive: boolean): Object => {
        if (isActive) {
            return {color: '#dc6562'}
        }
        return {}
    }

    const logoutTCHandler = () => {
        dispatch(logOutTC())
    }

    return (
        <div >
            <div className={s.navLinks}>
            <div >
                {profileId &&
                    <SuperButton onClick={logoutTCHandler} red={true}>
                        Logout
                    </SuperButton>
                }
            </div>
                <NavLink to={path.profile} style={({isActive}) => activeClass(isActive)}>PROFILE</NavLink>
                <NavLink to={path.login} style={({isActive}) => activeClass(isActive)}>LOGIN</NavLink>
                <NavLink to={path.signup} style={({isActive}) => activeClass(isActive)}>REGISTRATION</NavLink>
                <NavLink to={path.passwordReset} style={({isActive}) => activeClass(isActive)}>PASSWORD RECOVERY</NavLink>
                <NavLink to={path.passwordNew} style={({isActive}) => activeClass(isActive)}>NEW PASSWORD</NavLink>
                <NavLink to={path.test} style={({isActive}) => activeClass(isActive)}>TEST</NavLink>
            </div>
        </div>
    );
};

export default Header;