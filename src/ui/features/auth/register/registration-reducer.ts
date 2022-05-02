import {AppThunk} from "../../../../bll/store";

export type InitStateType = typeof initState


const initState = {}

export type RegistrationAction = { type: '', };
export const registrationReducer = (state: InitStateType = initState, action: RegistrationAction): InitStateType => {
    switch (action.type) {
        case '': {
            return state
        }
        default:
            return state
    }
}

//ACTION CREATOR


//THUNK CREATOR
export const registration = (email: string, password: string): AppThunk => async dispatch => {
    try {
        //const result = await authAPI.registration(email, password)
    } catch (e) {

    } finally {

    }
}


