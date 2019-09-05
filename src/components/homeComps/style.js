import styled from 'styled-components';

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    font: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
    img {
        display: block;
        float: left;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 4px 0 0 4px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    img {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 3px;
        cursor: pointer;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    padding-right: 10px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: 700;
        color: #333;
        cursor: pointer;
    }
    .title:hover {
        text-decoration: underline;
    }

    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;

    }
`