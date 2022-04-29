import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ProfileAction, profileReducer} from "../ui/features/profile/profile-reducer";
import {TestAction, testReducer} from "../ui/features/test/test-reducer";
import {AuthAction, authReducer} from "../ui/features/auth/auth-reducer";


//TYPE
export type AppStoreType = ReturnType<typeof reducers>
export type AppThunkDispatch = ThunkDispatch<AppStoreType, unknown, ActionType>;
export type ActionType = AuthAction | ProfileAction | TestAction
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStoreType,
    unknown,
    ActionType>

//STATE
const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    test: testReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store


// @ts-ignore
window.store = store // for dev
