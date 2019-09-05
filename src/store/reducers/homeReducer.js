import actionTypes from '../actionTypes/homeActionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: '',
        image: '',
        title: ''
    }],

    articleList: [{
        id: '',
        image: '',
        title: '',
        desc: ''
    }]
})

export default (state = defaultState, action) => {
    const { type } = action
    const value = action.value && fromJS(action.value)

    switch(type) {
        case actionTypes.TOPIC_LIST: 
            return state.set('topicList', value)
        case actionTypes.ARTICLE_LIST: 
            return state.set('articleList', value)
            
        default: 
            return state
    }
}