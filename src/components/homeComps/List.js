import React, { Component } from 'react'
import { ListWrapper, ListItem, ListInfo } from './style'
import actionCreators from '../../store/actionCreators'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export class List extends Component {
    render() {
        const { articleList, getMoreArticle } = this.props
        return (
            <ListWrapper>
                {articleList.map(item => {
                    return (
                        <Link to={`/detail/${item.get('id')}`}key={item.get('id')}>
                            <ListItem >
                                <img alt="list-item" src={item.get('image')}></img>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })}
                <div className="load-more" onClick={() => getMoreArticle()}>阅读更多</div>
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
        },
        getMoreArticle() {
            dispatch(actionCreators.homeActionCreators.getArticleList(true))
        },
    }
}

export default connect(mapState, mapDispatch )(List)
