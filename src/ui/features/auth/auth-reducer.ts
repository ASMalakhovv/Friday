export type InitStateType = typeof initState

const initState = {}

export type AuthAction = { type: '', };
export const authReducer = (state: InitStateType = initState, action: AuthAction): InitStateType => {
    switch (action.type) {
        case '': {
            return state
        }
        default:
            return state
    }
}
