import React, { Component }from 'react'
import { CSSTransition } from 'react-transition-group'
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoList,
    SearchInfoItem,
    SearchInfoSwitch,
} from './style'

import { connect } from 'react-redux'
import actionCreators from '../../store/actionCreators'
import axios from 'axios'
import '../../mock/searchInfo'

const getListArea = (show, list) => {
    if(show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        <i className="iconfont iconshuaxin"></i>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                
                <SearchInfoList>
                    {list.map(item => <SearchInfoItem key={item.id}>{item.label}</SearchInfoItem>)}
                </SearchInfoList>
            </SearchInfo>
        )
    }
}

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInfoList: []
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active home">
                        <i className="iconfont iconzhinanzhenfaxiandaohangdizhiweizhi"></i>
                        首页
                    </NavItem>
                    <NavItem className="left">
                        <i className="iconfont iconshouji"></i>
                        下载App
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><i className="iconfont iconAa"></i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}    
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={ () => handleInputFocus() }
                                onBlur={ () => handleInputBlur() }
                            ></NavSearch>
                        </CSSTransition>
                        <div className={focused ? 'focused icon' : 'icon'}><i className="iconfont iconfangdajing"></i></div>
                        {getListArea(focused, this.state.searchInfoList)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont iconbi"></i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    componentDidMount() {
        axios.get('/searchInfo').then(res => {
            console.log(res.data.list)
            this.setState(() => ({
                searchInfoList: res.data.list 
            }))
        })
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('headerReducer').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.headerActionCreators.getSearchFocus())
        },

        handleInputBlur() {
            dispatch(actionCreators.headerActionCreators.getSearchBlur())
            // const action = {
            //     type: 'search_input_blur',
            // }
            // dispatch(action)
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Header)