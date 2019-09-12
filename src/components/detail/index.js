import React, { Component } from 'react'
import { 
    DetailWrapper,
    DetailTitle,
    DetailWriter,
    DetailContent,
    DetailContentSlide,
} from './style'

import { withRouter } from 'react-router-dom'

class Detail extends Component {
    render() {
        // 从路由取参 用于获取对应 ID 的文章详情
        const id = this.props.match.params.id

        return <DetailWrapper>
            <DetailTitle>
                《二十岁的年纪，做八十岁想起来都会嘴角上扬的事》
            </DetailTitle>
            <DetailWriter>
                <img src="//upload.jianshu.io/users/upload_avatars/3459828/bffe61dd-0078-4f8f-95f5-865ee09c139d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="writer"></img>
                <div className="right">
                    <div className="title flex">
                        <p>这是作者名字</p>
                        <img src="//upload.jianshu.io/user_badge/b710beb8-7e8d-4001-9960-457e4440544e" alt="badge"></img>
                        <div className="follow">+ 关注</div>
                    </div>
                    <div className="desc flex">
                        <p className="flex">
                            <i className="iconfont iconzuanshi"></i>1282.1
                        </p>
                        
                        <p>2017.03.10 08:11*</p>
                        <p>字数 2966</p>
                        <p>阅读 286043</p>
                        <p>评论 2466</p>
                        <p>喜欢 15533</p>
                        <p>赞赏 73</p>
                    </div>

                </div>
            </DetailWriter>
            <DetailContent>
                <p>二十岁出头，正好处在一个尴尬的年纪。似乎看透了生活，实质却依旧单纯；似乎应有尽有，实质却一无所有；内心身怀雄心壮志，却又不得不脚踏实地。</p>
                <p className="bold">身处二十岁这个尴尬的年龄，确实会有些迷茫，也会有些无奈。但是每当背起行囊的那一刻，我就明白有些事情现在不去做，再也不会去做了。</p>
                <p>有人经常会问我，你认为旅行的意义是什么？你在路上都做什么？</p>
                <p>我不能告诉你旅行的意义是什么，或许旅行本身就没有意义。不过既然有人问后面一个问题，那我借此机会来分享下我在旅途中经常会做的十件事。</p>
                <p>因为，我觉得这些都是到八十岁之后想起来都会笑的事情。</p>
                <img src="//upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/933/format/webp"></img>
            </DetailContent>
            <DetailContentSlide />
        </DetailWrapper>
    }
}

export default withRouter(Detail)