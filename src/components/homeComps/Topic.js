import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from './style'
import { connect } from 'react-redux'
import actionCreators from '../../store/actionCreators'

export class Topic extends Component {
    render() {
        const { topicList } = this.props
        return (
            <TopicWrapper>
                { topicList.map(item => (
                    <TopicItem key={item.get('id')}>
                        <img alt="topic-item" src={item.get('image')}></img>
                        {item.get('title')}
                    </TopicItem>
                ))}
            </TopicWrapper>
        )
    }

    componentDidMount() {
        this.props.getTopicList()
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.get('homeReducer').get('topicList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopicList() {
            dispatch(actionCreators.homeActionCreators.getTopicList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
