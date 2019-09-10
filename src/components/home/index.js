import React, { Component } from 'react'
import { HomeWrapper } from './style'
import { HomeLeft } from './style'
import { HomeRight } from './style'
import HomeComps from '../homeComps'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showGoTop: false
        }
    }
    render() {
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

                {
                    this.state.showGoTop ? <div className="go-top" onClick={() => this.goTop()} >
                            <i className="iconfont iconshangjiantou"></i>
                        </div> : null
                }
            </HomeWrapper>
        </div>
    }
    
    goTop() {
        window.scrollTo(0, 0)
    }

    handleScroll = () => {
        this.setState(() => ({
            showGoTop: window.scrollY > 460
        }))
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
}




export default Home