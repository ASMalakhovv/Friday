import {Main} from "./ui/main/Main";
import s from './App.module.scss'
import {useEffect} from "react";
import {AppStoreType, useThunkDispatch} from "./bll/store";
import {useSelector} from "react-redux";
import {meTC} from "./app/app-reducer";
import {instance} from "./api/cards-api";


function App() {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const dispatch = useThunkDispatch()
    console.log('isLoggedIn', isLoggedIn)
    useEffect(() => {
        dispatch(meTC())
    }, [])


    console.log('render-App')

    return (
        <div className={s.app}>
            <Main/>
        </div>
    );
}

export default App;
