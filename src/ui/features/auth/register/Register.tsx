import s from './Register.module.scss'
import SuperInputText from "../../../common/SuperInputText/SuperInputText";
import SuperButton from "../../../common/SuperButton/SuperButton";

export function Register() {
    return (
        <div className={s.registerContainer}>
            <div className={s.registerBlock}>
                <h3>it-incubator</h3>
                <h3>Sign Up</h3>
                <SuperInputText/>
                <SuperInputText/>
                <SuperInputText/>
                <SuperButton>
                    Cancel
                </SuperButton>
                <SuperButton>
                    Register
                </SuperButton>
            </div>
        </div>
    );
}

