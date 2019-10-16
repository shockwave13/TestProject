import {INCREMENT_VALUE, DECREMENT_VALUE, SET_NEW_VALUE} from '../action/action';
import {combineReducers } from 'redux'

const initialState = {
    value: 0
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case INCREMENT_VALUE: {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case DECREMENT_VALUE: {
            return {
                ...state,
                value: state.value - 1
            }
        }
        case SET_NEW_VALUE: {
            return {
                ...state,
                value: action.payload
            }
        }
        default: return state
    }
}

export default rootReducer;

// Реалізувати екшен сет ню валюе
