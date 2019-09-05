import actionTypes from '../actionTypes/homeActionTypes'
import axios from 'axios'
import '../../mock/topicList'
import '../../mock/articleList'

const getTopicListAction = (value) => ({
    type: actionTypes.TOPIC_LIST,
    value
})

const getArticleListAction = (value) => ({
    type: actionTypes.ARTICLE_LIST,
    value
})


const getTopicList = () => {
    return (dispatch) => {
        axios.get('/topicList').then(res => {
            dispatch(getTopicListAction(res.data.list))
        }).catch(e => {
            console.error(e)
        })
    }
}

const getArticleList = () => {
    return (dispatch) => {
        axios.get('/articleList').then(res => {
            dispatch(getArticleListAction(res.data.list))
        }).catch(e => {
            console.error(e)
        })
    }
}

export default {
    getTopicList,
    getArticleList,
}