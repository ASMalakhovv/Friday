import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AppStoreType} from "../bll/store";
import {path} from "../ui/main/routes/Pages";
import {FC, ReactNode, useEffect} from "react";

type PropsType = {
    children: ReactNode
}

export const WithAuthRedirect: FC<PropsType> = ({children}) => {

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLoggedIn) navigate(path.login)
    }, [])

    return <>{children}</>
}