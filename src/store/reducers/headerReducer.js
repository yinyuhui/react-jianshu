import actionTypes from '../actionTypes/headerActionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    const { type } = action

    switch(type) {
        case actionTypes.SEARCH_INPUT_FOCUS: 
            return state.set('focused', true)
        case actionTypes.SEARCH_INPUT_BLUR: 
            return state.set('focused', false)
        default: 
            return state
    }
}