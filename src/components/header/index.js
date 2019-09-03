import React, { Component } from 'react'
import { 
    HeaderWrapper,
    Logo,
    Nav
} from './style'

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo href="/" />
                    <Nav>

                    </Nav>
                </HeaderWrapper>
                
            </div>
        )
    }
}

export default Header