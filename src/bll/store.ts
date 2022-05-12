import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ProfileAction, profileReducer} from "../ui/features/profile/profile-reducer";
import {registrationReducer, RegistrationAction} from "../ui/features/auth/register/registration-reducer";
import {LoginAction, loginReducer} from "../ui/features/auth/login/login-reducer";
import {PasswordNewAction, passwordNewReducer} from "../ui/features/auth/password-new/passwordNew-reducer";
import {PasswordResetAction, passwordResetReducer} from "../ui/features/auth/password-reset/passwordReset-reducer";
import {useDispatch} from "react-redux";
import {appReducer} from "../app/app-reducer";


//TYPE
export type AppStoreType = ReturnType<typeof reducers>
export type AppThunkDispatch = ThunkDispatch<AppStoreType, unknown, ActionType>;
export type AppDispatch = typeof store.dispatch;
export type ActionType = LoginAction | PasswordNewAction |
    PasswordResetAction | ProfileAction | RegistrationAction
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStoreType,
    unknown,
    ActionType>


//STATE
const reducers = combineReducers({
    login: loginReducer,
    app: appReducer,
    passwordNew: passwordNewReducer,
    passwordReset: passwordResetReducer,
    profile: profileReducer,
    registration: registrationReducer
})

const store = createStore(reducers, applyMiddleware(thunk))


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useThunkDispatch = () => useDispatch<AppThunkDispatch>()

export default store


// @ts-ignore
window.store = store // for dev
