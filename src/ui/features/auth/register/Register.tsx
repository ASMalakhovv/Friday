import s from './Register.module.scss'
import SuperButton from "../../../common/SuperButton/SuperButton";
import {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store";

export function Register() {
    const [valueEmail, setValueEmail] = useState("")
    const [valueOnePassword, setValueOnePassword] = useState("")
    const [valueTwoPassword, setValueTwoPassword] = useState("")

    const isDisable = useSelector<AppStoreType, boolean>(state => state.registration.isDisable)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.dataset.input) {
            const type: string = e.currentTarget.dataset.input
            if (type === 'email') {
                setValueEmail(e.currentTarget.value)
            } else if (type === 'onePassword') {
                setValueOnePassword(e.currentTarget.value)
            } else if (type === 'twoPassword') {
                setValueTwoPassword(e.currentTarget.value)
            }
        }
    }

    const sendRegistrationData = (email: string, passwordOne: string,
                                  passwordTwo: string) => {

    }

    return (
        <div className={s.registerContainer}>
            <div className={s.registerBlock}>
                <h3>it-incubator</h3>
                <h3>Sign Up</h3>
                <input type='text' value={valueEmail}
                       onChange={onChangeInput}
                       data-input='email'
                       autoComplete="off"
                />
                <input type='password' value={valueOnePassword}
                       onChange={onChangeInput}
                       data-input='onePassword'
                       autoComplete="off"
                />
                <input type='password' value={valueTwoPassword}
                       onChange={onChangeInput}
                       data-input='twoPassword'
                />
                <SuperButton onClick={() => console.log(valueEmail, valueOnePassword)}>
                    Cancel
                </SuperButton>
                <SuperButton disabled={isDisable}>
                    Register
                </SuperButton>
            </div>
        </div>
    );
}

