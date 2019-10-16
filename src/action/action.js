export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const DECREMENT_VALUE = 'DECREMENT_VALUE';
export const SET_NEW_VALUE = 'SET_NEW_VALUE';

export const incrementValue = () => ({
    type: INCREMENT_VALUE
})

export const decrementValue = () => ({
    type: DECREMENT_VALUE
})

export const setNewValue = (newValue) => ({
    type: SET_NEW_VALUE,
    payload: newValue
})