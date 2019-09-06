import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from './style'
import actionCreators from '../../store/actionCreators'
import { connect } from 'react-redux'

export class Recommend extends Component {
    render() {
        const { recommendList } = this.props
        return (
            <RecommendWrapper>
                {recommendList.map((item, index) => (
                    <RecommendItem image={item.get('image')} key={index}>
                    </RecommendItem>
                ))}
            </RecommendWrapper>
        )
    }

    componentDidMount() {
        this.props.getRecommendList()
    }
}

const mapStateToProps = (state) => ({
    recommendList: state.get('homeReducer').get('recommendList')
})

const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendList() {
            dispatch(actionCreators.homeActionCreators.getRecommendList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
