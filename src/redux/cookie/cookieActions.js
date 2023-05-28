import { BUY_COOKIE } from "./cookieTypes"

export const buyCookie = (number = 1) => {
    return {
        type: BUY_COOKIE,
        payload: number
    }
}