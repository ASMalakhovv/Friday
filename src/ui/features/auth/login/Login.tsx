import s from './Login.module.scss'
import SuperCheckbox from "../../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/SuperButton/SuperButton";
import {Navigate, NavLink} from "react-router-dom";
import {path} from "../../../main/routes/Pages";
import SuperInputText from "../../../common/SuperInputText/SuperInputText";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InitStateType, loginReducer, loginTC} from "./loginReducer";
import {AppStoreType, useAppDispatch} from "../../../../bll/store";
import {RequestStatusType} from "./appReducer";





export function Login() {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const appError = useSelector<AppStoreType, string | null>(state => state.app.error)
    const appStatus = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)
    const dispatch = useAppDispatch()

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
    //==============================================================================


    if (isLoggedIn) {
        return <Navigate to={path.profile}/>
    }



    const data = {email, password, rememberMe}

    const onClickLogin = () => {
        dispatch(loginTC(data))
    }


    return (
        <div className={s.loginBlock}>
            <div className={s.loginContainer}>
                <div>
                    It-incubator
                    Sign In
                </div>
                <div>
                    <SuperInputText type={'email'} value={email} onChangeText={changeEmailField}/>
                    <SuperInputText type={'password'} value={password} onChangeText={changePasswordField}/>
                    <SuperCheckbox onChangeChecked={changeRememberMe}/>
                </div>
                <div>Error: {appError}</div>
                <div>
                    <SuperButton disabled={appStatus === 'loading'} callback={()=>onClickLogin()}>Login</SuperButton>
                    Don`t have an account?
                    <NavLink to={path.signup}>Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
}

