export const addToCart = (payload) => ({
    type: 'ADD',
    payload
});

export const delet = (i) => ({
    type: 'DELETE',
    i
});

export const addBuyer = (payload) => ({
    type: 'BUYER',
    payload
});

export const addOrder = payload => ({
    type: 'ORDER',
    payload
});