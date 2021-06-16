import { orderActionTypes } from './actions'

const initialState = {
    count: 80,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActionTypes.ADD_ORDER:
            return state.count + action.payload
        case orderActionTypes.OUT_ORDER:
            return state.count - action.payload
        default:
            return state
    }
}
