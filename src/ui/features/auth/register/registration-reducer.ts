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
