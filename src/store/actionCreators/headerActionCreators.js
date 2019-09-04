import actionTypes from '../actionTypes/headerActionTypes'

const getSearchFocus = () => ({
    type: actionTypes.SEARCH_INPUT_FOCUS
})

const getSearchBlur = () => ({
    type: actionTypes.SEARCH_INPUT_BLUR
})

export default {
    getSearchFocus,
    getSearchBlur
}