const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'DELETE':
            return {
                ...state,
                cart: state.cart.filter((item, index) => index !== action.i)
            }
        case 'BUYER':
            return {
                ...state,
                buyer: action.payload
            }
        case 'ORDER':
            return {
                ...state,
                order: [...state.order, action.payload]
            }
        default:
            return state
    }
}

export default reducer;