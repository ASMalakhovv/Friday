import {useAppDispatch, useAppSelector} from "../../../../hooks/useReactRedux";
import {Navigate} from "react-router-dom";
import {path} from "../../../main/routes/Pages";
import React, {useCallback} from "react";
import SuperButton from "../../../common/SuperButton/SuperButton";
import s from "../auth/login/Login.module.scss";
import {ProgressBar} from "../../../components/ProgressBar/ProgressBar";
import PopUpWindowRegistration from "../../../components/PopUpWindow/PopUpWindowRegistration/PopUpWindowRegistration";
import {setErrorLogin} from "../../auth/login/login-reducer";




export function EditProfile() {

    const dispatch = useAppDispatch()
    const isLoading: boolean = useAppSelector(state => state.login.isLoading)
    const profileId: null | string = useAppSelector(state => state.profile._id)
    const profileInfo = useAppSelector(state => state.profile)
    const error: null | string = useAppSelector(state => state.login.error)

    const closePopUpWindow = useCallback(() => {
        error && dispatch(setErrorLogin(null))
    }, [error])

    return (
        !profileId
            ?
            <Navigate to={path.login}/>
            :
        <div>
            <div>
                Profile INFO
            </div>

            <div className={s.popUpContainer}>
                <div className={s.popUp}>
                    {error && <PopUpWindowRegistration value={error} callback={closePopUpWindow}
                                                       className={s.popUp}
                                                       header='Error'
                    />}
                </div>
            </div>
            <div className={s.loginBlock}>
                <div className={s.loginContainer}>
                    <div className={s.progressBar}>
                        {isLoading && <ProgressBar/>}
                    </div>

                    <header className={s.header}>
                        <h2>Personal information</h2>
                        <img src={'https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg'} />
                        <p>ava URL: {profileInfo.avatar}</p>
                    </header>
                    <div className={s.header}>
                        <h3>{profileInfo.name}</h3>
                    </div>
                    <div className={s.header}>
                        <p>e-mail: {profileInfo.email}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EditProfile;