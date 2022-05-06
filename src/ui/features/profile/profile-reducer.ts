import {authAPI, DeviceTokens, LoginResponse} from "../../../dal/api";
import {AppThunk} from "../../../bll/store";
import {handlingError} from "../../../utils/error-utils";
import {changeIsLoadingRegistration} from "../auth/register/registration-reducer";
import {setErrorLogin} from "../auth/login/login-reducer";

export type InitStateType = typeof initState

const initState = {
    _id: null as null | string,
    email: null as null | string,
    rememberMe: false,
    isAdmin: false,
    name: null as null | string,
    verified: false,
    publicCardPacksCount: null as null | number,
    created: null as null | string,
    updated: null as null | string,
    __v: null as null | number,
    token: null as null | string,
    tokenDeathTime: null as null | number,
    avatar: null as null | string,
    deviceTokens: [] as DeviceTokens[]
}

export const profileReducer = (state: InitStateType = initState, action: ProfileAction): InitStateType => {
    switch (action.type) {
        case 'profile/SET-PROFILE': {
            return {...state, ...action.payload}
        }
        case 'profile/SET-LOG-OUT': {
            return {...state, _id: null}
        }
        default:
            return {...state}
    }
}

//ACTION-CREATOR
export const setProfile = (payload: LoginResponse) => {
    return {
        type: 'profile/SET-PROFILE',
        payload
    }
}

export const logOutAC = (payload: null) => {
    return {
        type: 'profile/SET-LOG-OUT',
        payload
    }
}

// THUNK-CREATORS
export const logOutTC = ():AppThunk<void> => async dispatch=> {
    dispatch(changeIsLoadingRegistration(true))

    authAPI.logOut()
        .then(res => {
            if (res) {
                dispatch(logOutAC(null))
                console.log('LOG OUT COMPLETED! Details: ' + res.data.info)
            }
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            handlingError(dispatch, error)
            dispatch(setErrorLogin(e.message))
            console.log('Error: ', {...error})
        })
        .finally( ()=> {
            dispatch(changeIsLoadingRegistration(false))
        } )
}


//TYPES
export type ProfileAction = SetProfile | SetLogOut

export type SetProfile = ReturnType<typeof setProfile>
export type SetLogOut = ReturnType<typeof logOutAC>
