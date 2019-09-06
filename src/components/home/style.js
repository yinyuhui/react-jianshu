import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    .home-image {
        display: block;
        width: 625px;
        height: 240px;
    }
    .go-top {
        width: 60px;
        height: 60px;
        position: fixed;
        right: 40px;
        bottom: 40px;
        border: 1px solid #dcdcdc;
        cursor: pointer;
        text-align: center;
        line-height: 60px;
    }
    .go-top i {
        font-size: 20px;
    }
`
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 3px;
    width: 625px;
    float: left;
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`