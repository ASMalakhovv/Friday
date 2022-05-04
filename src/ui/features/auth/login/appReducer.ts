

export type InitStateType = {
    status: RequestStatusType
    error: string | null
}

const initState: InitStateType = {
    status: 'idle',
    error: null,
}


export const appReducer = (state = initState, action: AppActions): InitStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type SetAppStatusActionType = ReturnType <typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType <typeof setAppErrorAC>

export type AppActions =
    SetAppStatusActionType
    | SetAppErrorActionType

//ACTIONS
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}
export const setAppErrorAC = (error: string | null) => {
    return {type: 'APP/SET-ERROR', error} as const
}