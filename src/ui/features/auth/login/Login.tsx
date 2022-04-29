import {NavLink} from "react-router-dom";
import {path} from "../../../main/routes/Pages";
import s from './Login.module.scss'


export function Login() {
    return (
        <div className={s.loginBlock}>
            <div className={s.loginContainer}>
                <NavLink to={path.signup} className={s.navLink}>Registration</NavLink>
                <NavLink to={path.passwordReset}>Reset password</NavLink>
                <NavLink to={path.passwordNew}>New password</NavLink>
            </div>
        </div>
    );
}

