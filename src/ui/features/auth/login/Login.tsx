import s from './Login.module.scss'
import SuperCheckbox from "../../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/SuperButton/SuperButton";
import {NavLink} from "react-router-dom";
import {path} from "../../../main/routes/Pages";
import SuperInputText from "../../../common/SuperInputText/SuperInputText";
import {useState} from "react";
import {useDispatch} from "react-redux";


export function Login() {

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
                <div>
                    <SuperButton/>
                    Don`t have an account?
                    <NavLink to={path.signup}>Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
}

