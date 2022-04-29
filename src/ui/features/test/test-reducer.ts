export type InitStateType = typeof initState

const initState = {}

export type TestAction = { type: '', };
export const testReducer = (state: InitStateType = initState, action: TestAction): InitStateType => {
    switch (action.type) {
        case '': {
            return state
        }
        default:
            return state
    }
}
