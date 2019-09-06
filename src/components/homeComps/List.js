import React, { Component } from 'react'
import { ListWrapper, ListItem, ListInfo } from './style'
import actionCreators from '../../store/actionCreators'
import { connect } from 'react-redux';

export class List extends Component {
    render() {
        const { articleList } = this.props
        return (
            <ListWrapper>
                {articleList.map(item => {
                    return (
                        <ListItem key={item.get('id')}>
                            <img alt="list-item" src={item.get('image')}></img>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })}
                <div className="load-more">阅读更多</div>
            </ListWrapper>
            
        )
    }

    componentDidMount() {
        this.props.getArticleList()
    }
}

const mapState = (state) => {
    return {
        articleList: state.get('homeReducer').get('articleList')
    }
}

const mapDispatch = (dispatch) => {
    return {
        getArticleList() {
            dispatch(actionCreators.homeActionCreators.getArticleList())
        }
    }
}

export default connect(mapState, mapDispatch )(List)
