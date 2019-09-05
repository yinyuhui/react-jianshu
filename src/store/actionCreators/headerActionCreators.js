import actionTypes from '../actionTypes/headerActionTypes'
import axios from 'axios'
import '../../mock/searchInfo'

const getSearchFocus = () => ({
    type: actionTypes.SEARCH_INPUT_FOCUS
})

const getSearchBlur = () => ({
    type: actionTypes.SEARCH_INPUT_BLUR
})

const getSearchInfoListAction = (value) => ({
    type: actionTypes.SEARCH_INFO_LIST,
    value
})

const getSearchInfoList = () => {
    return (dispatch) => {
        axios.get('/searchInfo').then(res => {
            dispatch(getSearchInfoListAction(res.data.list))
        }).catch(e => {
            console.error(e)
        }) 
    }
}

const getMouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

const getMouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export default {
    getSearchFocus,
    getSearchBlur,
    getSearchInfoList,
    getMouseEnter,
    getMouseLeave,
}