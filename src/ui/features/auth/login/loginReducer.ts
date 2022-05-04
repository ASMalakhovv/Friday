import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../../../api/cards-api";
import {AppThunkDispatch} from "../../../../bll/store";
import {setAppErrorAC, setAppStatusAC} from "./appReducer";


export type LoginAction = ReturnType <typeof setIsLoggedInAC>

export type InitStateType = typeof initState

const initState = {
    isLoggedIn: false

}

export const loginReducer = (state: InitStateType = initState, action: LoginAction): InitStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}



// actions
export const setIsLoggedInAC = (value: boolean) => {
    return {type: 'login/SET-IS-LOGGED-IN', value: value} as const
}

//thunks
/*
export const pingTC = () => (dispatch: Dispatch) => {
    cardsAPI.ping()
        .then(res => {

        })
}*/
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(e =>{
            const error = e.response ? e.response.data.error : ((e.massage + ', more details in the console')
                + console.log('ERROR: ', {...e}))
            dispatch (setAppErrorAC(error))
            dispatch (setAppStatusAC('failed'))
        })
}