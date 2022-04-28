import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Error404} from './Error/Error';
import {Login} from './Login/Login';
import {PasswordNew} from './PasswordNew/PasswordNew';
import {PasswordReset} from './PasswordReset/PasswordReset';
import {Profile} from './Profile/Profile';
import {Signup} from './Signup/Signup';
import {Test} from './Test/Test';

export const path = {
    login: '/login',
    signup: '/signup',
    profile: '/profile',
    passwordReset: '/password_reset',
    passwordNew: '/password_new',
    test: '/test'
}

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={path.test}/>}/>
                <Route path={path.test} element={<Test/>}/>
                <Route path={path.login} element={<Login/>}/>
                <Route path={path.signup} element={<Signup/>}/>
                <Route path={path.profile} element={<Profile/>}/>
                <Route path={path.passwordReset} element={<PasswordReset/>}/>
                <Route path={path.passwordNew} element={<PasswordNew/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

export default Pages;