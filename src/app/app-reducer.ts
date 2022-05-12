import {authAPI, LoginParamsType} from "../api/cards-api";
import {Dispatch} from "redux";
import {setProfileAC} from "../ui/features/profile/profile-reducer";
import {setIsLoggedInAC} from "../ui/features/auth/login/login-reducer";


export type InitStateType = {
    status: RequestStatusType
    error: string | null
    initialized: boolean
}

const initState: InitStateType = {
    status: 'idle',
    error: null,
    initialized: false,
}


export const appReducer = (state = initState, action: AppActions): InitStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZED':
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type SetAppStatusActionType = ReturnType <typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType <typeof setAppErrorAC>
export type SetAppInitializedActionType = ReturnType <typeof setAppInitializedAC>

export type AppActions =
    SetAppStatusActionType
    | SetAppErrorActionType
    |SetAppInitializedActionType

//ACTIONS
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}
export const setAppErrorAC = (error: string | null) => {
    return {type: 'APP/SET-ERROR', error} as const
}
export const setAppInitializedAC = (initialized: boolean) => {
    return {type: 'APP/SET-INITIALIZED', initialized} as const
}
//THUNK-CREATORS
export const meTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.me()
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            console.log('res', res)
            dispatch(setProfileAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(e =>{
            dispatch(setIsLoggedInAC(false))
            dispatch (setAppStatusAC('idle'))
        })
}