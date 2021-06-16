export const orderActionTypes = {
    ADD_ORDER: 'ORDER.INCREASE_ORDER',
    OUT_ORDER: 'ORDER.DECREASE_ORDER',
}
export const orderAction = {
    addOrder: (payload) => ({
        type: orderActionTypes.ADD_ORDER,
        payload,
    }),
    outOrder: (payload) => ({
        type: orderActionTypes.OUT_ORDER,
        payload,
    }),
}
