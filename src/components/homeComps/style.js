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

export const ListWrapper = styled.div`
    .load-more {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 15px;
        background: #9b9b9b;
        border-radius: 20px;
        margin: 30px 0 60px;
        cursor: pointer;
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
        border-radius: 4px;
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

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${ (props) => props.image });
    background-size: contain;
    cursor: pointer;
`

export const DownloadWrapper = styled.div`
    width: 278px;
    height: 80px;
    border: 1px solid #dcdcdc;
    margin: 0 0 30px;
    padding: 10px 22px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 60px;
        height: 60px;
        float: left;
        margin-right: 14px;
    }
    .title {
        font-size: 15px;
        color: #333;
        line-height: 32px;
    }
    .desc {
        font-size: 13px;
        color: #999;
        line-height: 14px;
    }
`
export const WriterWrapper = styled.div`
    width: 278px;
    line-height: 30px;
    text-align: center;
    .title {
        overflow: hidden;
        color: #969696;
        font-size: 14px;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
        cursor: pointer;
    }

    .right i {
        font-size: 12px;
        margin-right: 6px;
        transition: all .2s ease-in;
    }

    .show-all {
        width: 100%;
        height: 34px;
        border: 1px solid #dcdcdc;
        color: #787878;
        font-size: 13px;
        text-align: center;
        line-height: 34px;
        border-radius: 4px;
        margin-top: 20px;
        background: #f7f7f7;
        cursor: pointer;
    }
`

export const WriterItem = styled.div`
    height: 48px;
    width: 280px;
    margin-top: 17px;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        float: left;
        margin-right: 14px
    }

    .content {
        float: left;
        text-align: left;
    }

    .content .name {
        color: #333;
        font-size: 14px;
        line-height: 24px;
    }

    .content .desc {
        color: #969696;
        font-size: 12px;
        line-height: 24px;
    }

    .follow {
        float: right;
        line-height: 48px;
        color: #42c06e;
        font-size: 13px;
    }
`

