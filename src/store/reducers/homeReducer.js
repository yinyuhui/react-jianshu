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
    }],
    
    recommendList: [{
        id: '',
        image: '',
        title: '',
    }],

    writerList: [{
        id: '',
        image: '',
        name: '',
        desc: '',
    }],

})

export default (state = defaultState, action) => {
    const { type } = action
    const value = action.value && fromJS(action.value)

    switch(type) {
        case actionTypes.TOPIC_LIST: 
            return state.set('topicList', value)
        case actionTypes.ARTICLE_LIST: 
            let list = action.joint ? fromJS([...state.get('articleList'),...value]) : value
            return state.set('articleList', list)
        case actionTypes.RECOMMEND_LIST: 
            return state.set('recommendList', value)    
        case actionTypes.WRITER_LIST: 
            return state.set('writerList', value)    
        default: 
            return state
    }
}