import {DeviceTokensType, LoginResponseType} from "../../../api/cards-api";

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
    deviceTokens: [] as DeviceTokensType[]
}

export const profileReducer = (state: InitStateType = initState, action: ProfileAction): InitStateType => {
    switch (action.type) {
        case 'PROFILE/SET-PROFILE': {
            return {...state, ...action.loginDataResponse}
        }
        default:
            return state
    }
}

export type ProfileAction = ReturnType <typeof setProfileAC>

//ACTION-CREATOR
export const setProfileAC = (loginDataResponse: LoginResponseType) => {
    return {
        type: 'PROFILE/SET-PROFILE',
        loginDataResponse
    }
}
