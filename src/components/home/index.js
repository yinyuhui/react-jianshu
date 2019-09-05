import React from 'react'
import { HomeWrapper } from './style'
import { HomeLeft } from './style'
import { HomeRight } from './style'
import HomeComps from '../homeComps'

const Home = () => {
    return <div>
        <HomeWrapper>
            <HomeLeft>
                <img className="home-image" alt="home" src="https://upload-images.jianshu.io/upload_images/3343569-0fda192e70b8da44.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></img>
                <HomeComps.Topic></HomeComps.Topic>
                <HomeComps.List></HomeComps.List>
            </HomeLeft>
            <HomeRight>
                <HomeComps.Recommend></HomeComps.Recommend>
                <HomeComps.Writer></HomeComps.Writer>
            </HomeRight>
        </HomeWrapper>
    </div>
}

export default Home