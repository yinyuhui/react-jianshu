import styled from 'styled-components'

export const DetailWrapper = styled.div`
    /* overflow: hidden; */
    width: 620px;
    margin: 0 auto;
    padding-top: 56px;
    position: relative;
`
export const DetailTitle = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    padding-top: 50px;
    color: #333;
`

export const DetailWriter = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    align-items: center;
    .flex {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #ddd;
        margin-right: 16px;
    }
    .title {
        img {
            width: 20px;
            height: 20px;
            margin: 0 10px;
        }

        p {
            color: #2f2f2f;
            font-size: 16px;
            cursor: pointer;
        }

        .follow {
            font-size: 12px;
            background: #42c02e;
            color: #fff;
            width: 52px;
            height: 19px;
            text-align: center;
            line-height: 19px;
            border-radius: 40px;
        }
    }

    .desc {
        font-size: 12px;
        color: #969696;
        margin-top: 10px;
        p + p {
            margin-left: 6px;
        }
        p:first-child {
            color: #ea6f5a;
        }

        p:first-child > i {
            margin-right: 4px;
            font-size: 12px;
        }
    }

`

export const DetailContent = styled.div`
    width: 620px;
    margin-top: 30px;
    padding-bottom: 30px;
    p {
        margin: 20px 0;
        line-height: 28px;
    }
    p.bold {
        font-weight: 600;
    }
    img {
        width: 700px;
        margin-left: -40px;
    }
`

export const DetailContentSlide = styled.div`
    width: 180px;
    height: 260px;
    background: #000;
    position: fixed;
    top: 112px;
    right: 50%;
    margin-right: -560px;
    background-image: url(//cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
`