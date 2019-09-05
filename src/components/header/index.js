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



class Header extends Component {

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
                        { this.getListArea() }
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

    getListArea = () => {
        const { focused, mouseIn, searchInfoList, onMouseEnter, onMouseLeave, changeSearchInfoList } = this.props
        if(searchInfoList && (focused || mouseIn)) {
            return (
                <SearchInfo 
                    onMouseEnter={ () => onMouseEnter() }
                    onMouseLeave={ () => onMouseLeave() }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ () => changeSearchInfoList(this.spinIcon) }>
                            <i 
                                className="iconfont iconshuaxin spin"
                                ref={ (icon) => this.spinIcon = icon }
                            ></i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    
                    <SearchInfoList>
                        { searchInfoList.map(item => {
                            return  <SearchInfoItem key={item.get('id')}>
                                        {item.get('label')}
                                    </SearchInfoItem>
                        })}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null
        }
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.get('headerReducer').get('focused'),
        searchInfoList: state.get('headerReducer').get('searchInfoList'),
        mouseIn: state.get('headerReducer').get('mouseIn'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.headerActionCreators.getSearchFocus())
            dispatch(actionCreators.headerActionCreators.getSearchInfoList())
        },

        handleInputBlur() {
            dispatch(actionCreators.headerActionCreators.getSearchBlur())
        },

        onMouseEnter() {
            dispatch(actionCreators.headerActionCreators.getMouseEnter())
        },

        onMouseLeave() {
            dispatch(actionCreators.headerActionCreators.getMouseLeave())
        },

        changeSearchInfoList(spinIcon) {
            const originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '') || 0
            spinIcon.style.transform = `rotate(${360 + Number(originAngle)}deg)`
            dispatch(actionCreators.headerActionCreators.getSearchInfoList())
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Header)