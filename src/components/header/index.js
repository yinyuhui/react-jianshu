import React, { Component } from 'react'
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

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
    }
    
    render() {
        return (
            <div>
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
                                in={this.state.focused}    
                                classNames="slide"
                            >
                                <NavSearch
                                    className={this.state.focused ? 'focused' : ''}
                                    onFocus={ () => this.handleInputFocus() }
                                    onBlur={ () => this.handleInputBlur() }
                                ></NavSearch>
                            </CSSTransition>
                            <div className={this.state.focused ? 'focused icon' : 'icon'}><i className="iconfont iconfangdajing"></i></div>
                            
                        </SearchWrapper>
                    </Nav>
                </HeaderWrapper>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont iconmaobi"></i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </div>
        )
    }

    handleInputFocus() {
        this.setState( () => ({
            focused: true
        }))
    }

    handleInputBlur() {
        this.setState( () => ({
            focused: false
        }))
    }
}

export default Header