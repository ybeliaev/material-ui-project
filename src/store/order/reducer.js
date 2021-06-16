import { orderActionTypes } from './actions'

const initialState = {
    order: { pizzasCount: 80 },
    user: { name: '' },
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActionTypes.ADD_ORDER:
            return { ...state, order: state.order.pizzasCount + action.payload }
        case orderActionTypes.OUT_ORDER:
            return { ...state, order: state.order.pizzasCount - action.payload }
        default:
            return state
    }
}
