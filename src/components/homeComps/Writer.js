import React, { Component } from 'react'
import { WriterWrapper, WriterItem } from './style'
import { connect } from 'react-redux'
import actionCreators from '../../store/actionCreators'

export class Writer extends Component {
    render() {
        const { writerList } = this.props
        return (
            <WriterWrapper>
                <div className="title">
                    <p className="left">推荐作者</p>
                    <p className="right">
                        <i className="iconfont iconshuaxin"></i>
                        换一批
                    </p>
                </div>
                {writerList.map((item, index) => (
                    <WriterItem key={index}> 
                        <img alt="writer" src={item.get('image')}></img>
                        <div className="content">
                            <div className="name">{item.get('name')}</div>
                            <div className="desc">{item.get('desc')}</div>
                        </div>
                        <div className="follow">+关注</div>
                    </WriterItem>
                ))}

                <div className="show-all">查看全部</div>
                
            </WriterWrapper>
        )
    }

    componentDidMount() {
        this.props.getWriterList()
    }
}

const mapState = (state) => {
    return {
        writerList: state.getIn(['homeReducer', 'writerList'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getWriterList() {
            dispatch(actionCreators.homeActionCreators.getWriterList())
        }
    }
}

export default connect(mapState, mapDispatch)(Writer)
