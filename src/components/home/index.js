import React from 'react'
import { HomeWrapper } from './style'
import { HomeLeft } from './style'
import { HomeRight } from './style'
import HomeComps from '../homeComps'

const Home = () => {
    return <div>
        <HomeWrapper>
            <HomeLeft>
                <img className="home-image" alt="home" src="//upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></img>
                <HomeComps.Topic></HomeComps.Topic>
                <HomeComps.List></HomeComps.List>
            </HomeLeft>
            <HomeRight>
                <HomeComps.Recommend></HomeComps.Recommend>
                <HomeComps.Download></HomeComps.Download>
                <HomeComps.Writer></HomeComps.Writer>
            </HomeRight>
            <div className="go-top">
                <i className="iconfont iconshangjiantou"></i>
            </div>
        </HomeWrapper>
    </div>
}

export default Home