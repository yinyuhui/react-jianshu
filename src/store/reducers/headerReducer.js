import actionTypes from '../actionTypes/headerActionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    searchInfoList: [],
    recommendList: [],
})

export default (state = defaultState, action) => {
    const { type } = action
    const value = action.value && fromJS(action.value)

    switch(type) {
        case actionTypes.SEARCH_INPUT_FOCUS: 
            return state.set('focused', true)
        case actionTypes.SEARCH_INPUT_BLUR: 
            return state.set('focused', false)
        case actionTypes.SEARCH_INFO_LIST: 
            return state.set('searchInfoList', value)
        case actionTypes.MOUSE_ENTER: 
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE: 
            return state.set('mouseIn', false)
        
        default: 
            return state
    }
}