import { BUY_COOKIE } from "./cookieTypes"

const initialState = {
    numOfCookies: 50
}

const cookieReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_COOKIE: return {
            ...state,
            numOfCookies: state.numOfCookies - action.payload
        }
        default: return state
    }
}

export default cookieReducer;