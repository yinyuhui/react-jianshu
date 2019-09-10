import actionTypes from '../actionTypes/homeActionTypes'
import axios from 'axios'
import '../../mock/topicList'
import '../../mock/articleList'
import '../../mock/recommendList'
import '../../mock/writerList'

const getTopicListAction = (value) => ({
    type: actionTypes.TOPIC_LIST,
    value
})

const getArticleListAction = (value, joint) => ({
    type: actionTypes.ARTICLE_LIST,
    value,
    joint,
})

const getRecommendListAction = (value) => ({
    type: actionTypes.RECOMMEND_LIST,
    value
})

const getWriterListAction = (value) => ({
    type: actionTypes.WRITER_LIST,
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

const getArticleList = (joint = false) => {
    return (dispatch) => {
        axios.get('/articleList').then(res => {
            dispatch(getArticleListAction(res.data.list, joint))
        }).catch(e => {
            console.error(e)
        })
    }
}

const getRecommendList = () => {
    return (dispatch) => {
        axios.get('/recommendList').then(res => {
            dispatch(getRecommendListAction(res.data.list))
        }).catch(e => {
            console.error(e)
        })
    }
}

const getWriterList = () => {
    return (dispatch) => {
        axios.get('/writerList').then(res => {
            dispatch(getWriterListAction(res.data.list))
        }).catch(e => {
            console.error(e)
        })
    }
}

export default {
    getTopicList,
    getArticleList,
    getRecommendList,
    getWriterList,
}