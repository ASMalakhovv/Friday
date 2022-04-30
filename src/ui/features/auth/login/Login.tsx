import s from './Login.module.scss'
import SuperCheckbox from "../../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/SuperButton/SuperButton";
import {NavLink} from "react-router-dom";
import {path} from "../../../main/routes/Pages";
import SuperInputText from "../../../common/SuperInputText/SuperInputText";


export function Login() {
    return (
        <div className={s.loginBlock}>
            <div className={s.loginContainer}>
                <div>
                    It-incubator
                    Sign In
                </div>
                <div>
                    <SuperInputText/>
                    <SuperInputText/>
                    <SuperCheckbox/>
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

