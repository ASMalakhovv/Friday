import s from './Login.module.scss'
import eye from "../../../assets/image/eye.png";
import SuperCheckbox from "../../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/SuperButton/SuperButton";
import {Navigate,Link, NavLink} from "react-router-dom";
import {path} from "../../../main/routes/Pages";
import SuperInputText from "../../../common/SuperInputText/SuperInputText";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InitStateType, loginReducer, loginTC} from "./login-reducer";
import {AppStoreType, useAppDispatch, useThunkDispatch} from "../../../../bll/store";
import {RequestStatusType, setAppErrorAC} from "../../../../app/app-reducer";
import {ProgressBar} from "../../../components/ProgressBar/ProgressBar";
import PopUpWindowRegistration from "../../../components/PopUpWindowRegistration/PopUpWindowRegistration";
import React from 'react';


export const Login = () =>  {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const appError = useSelector<AppStoreType, string | null>(state => state.app.error)
    const appStatus = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)
    const thunkDispatch = useThunkDispatch()
    const actionDispatch = useDispatch()

    //==============================================================================
    const [email, setEmail] = useState('')
    const changeEmailField = (newEmail: string) => {
        setEmail(newEmail)
    }
    const [password, setPassword] = useState('')
    const changePasswordField = (newPassword: string) => {
        setPassword(newPassword)
    }
    const [rememberMe, setRememberMe] = useState(false)
    const changeRememberMe = (newRememberMe: boolean) => {
        setRememberMe(newRememberMe)
    }
    const [typePassword, setTypePassword] = useState('password')
    //==============================================================================



    // CALLBACKS
    const onClickLogin = () => {
        thunkDispatch(loginTC({email, password, rememberMe}))
    }
    const closePopUpWindow = useCallback(() => {
        appError && actionDispatch(setAppErrorAC(null))
    }, [appError])

    const changeTypeForInput = () => {
        setTypePassword(typePassword === 'text' ? 'password' : 'text')
    }

    //COMPUTING STYLES
    const classNameInput = appError ? `${s.error}` : ''
    const classNameLink = appError ? `${s.disabledLink}` : ''

    return (
        isLoggedIn
            ?
            <Navigate to={path.profile}/>
            :
            <div className={s.loginBlock}>
                <div className={s.loginContainer}>
                    <div>
                        {isLoggedIn && <ProgressBar/>}
                    </div>
                    <div className={s.header}>
                        <h1>It-incubator</h1>
                        <h2>Sign In</h2>

                    </div>
                    <div className={s.popUpContainer}>
                        <div className={s.popUp}>
                            {appError && <PopUpWindowRegistration value={appError} callback={closePopUpWindow}
                                                               className={s.popUp}
                                                               header='Error'
                            />}
                        </div>
                    </div>
                    <div className={s.inputBlock}>

                        <div className={s.inputContainer}>
                            <SuperInputText type={'email'} label={'Email'} value={email} onChangeText={changeEmailField}/>
                        </div>
                        <div className={s.inputContainer}>
                            <SuperInputText type={typePassword} label={'Password'} value={password} onChangeText={changePasswordField}/>
                            <img src={eye} onClick={changeTypeForInput}/>
                        </div>


                        {/*<div className={s.inputContainer}>*/}
                        {/*    <SuperCheckbox onChangeChecked={changeRememberMe}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={s.linkForgotPass}>
                        <Link to={path.passwordReset} className={classNameLink}>Forgot Password</Link>
                    </div>
                    <div className={s.control}>
                        <SuperButton disabled={appStatus === 'loading'}
                                     callback={() => onClickLogin()}>
                            Login
                        </SuperButton>
                        <p>Don`t have an account?</p>
                        <NavLink className={classNameLink} to={path.signup} >Sign Up</NavLink>
                    </div>
                </div>
            </div>
    );
}

