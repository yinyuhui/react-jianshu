import Mock from 'mockjs'

const list = ['社会热点', '手绘', '简书电影', '读书', '摄影', '旅行-在路上', '历史']

export default Mock.mock('/topicList', 'get', {
    success: true,
    'list|7': [{
        'id|+1': 1,
        'title|+1': list,
        'image': "//upload-images.jianshu.io/upload_images/1464364-6de002ec989a92e4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }]
})