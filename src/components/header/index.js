import React from 'react'
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
} from './style'

import { connect } from 'react-redux'

const Header = (props) =>  {
    const { focused, handleInputFocus, handleInputBlur } = props
        
    return (
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem className="left active home">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
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
                    
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">
                    <i className="iconfont iconmaobi"></i>写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.headerReducer.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_input_focus',
            }
            dispatch(action)
        },

        handleInputBlur() {
            const action = {
                type: 'search_input_blur',
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)