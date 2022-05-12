import axios, {AxiosResponse} from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const cardsAPI = {
    ping() {
        return instance.get('ping')
    }
}

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<{data: LoginParamsType}, AxiosResponse<LoginResponseType>>('auth/login', data)
    },
    me() {
        return instance.post('auth/me')
    },
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginResponseType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
    avatar: string
    deviceTokens: DeviceTokensType[]
}
export type DeviceTokensType = {
    _id: string
    device: string
    token: string
    tokenDeathTime: number
}