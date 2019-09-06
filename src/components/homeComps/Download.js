import React, { Component } from 'react';
import { DownloadWrapper } from './style'

class Download extends Component {
  render() {
    return (
        <DownloadWrapper> 
            <img alt="qr" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"></img> 
            <div className="title">
              下载简书手机APP >
            </div>
            <div className="desc">
              随时随地发现和创作内容  
            </div>
        </DownloadWrapper>
    );
  }
}

export default Download;
