import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a
    }
    &.home {
        margin-right: 10px;
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .icon {
        position: absolute;
        right: 5px;
        bottom: 4px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        color: #969696;
    }

    .icon.focused {
        background-color: #969696;
        color: #fff;
    }

    .slide-enter {
        transition: all .2s ease-out;
        width: 160px
    }

    .slide-enter-active {
        width: 240px;
    }

    .slide-exit {
        transition: all .2s ease-out;
    }

    .slide-exit-active {
        width: 160px;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin: 9px 0 0 25px;
    border: none;
    outline: none;
    border-radius:19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
    
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ea6f5a;
    &.reg {
        color: #ea6f5a;
    }
    &.writing {
        color: #fff;
        background: #ea6f5a;
    }
    i {
        margin-right: 6px;
    }

`
