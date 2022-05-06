import {Main} from "./ui/main/Main";
import s from './App.module.scss'
import {useEffect} from "react";
import {initializeAppTC} from "./app/app-reducer";
import {useAppDispatch} from "./bll/store";





function App() {

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(initializeAppTC())
    },[])

    return (
        <div className={s.app}>
            <Main/>
        </div>
    );
}

export default App;
