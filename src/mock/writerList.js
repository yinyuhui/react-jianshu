import Mock from 'mockjs'

export default Mock.mock('/writerList', 'get', {
    'list|5': [{
        'id|+1': 1,
        'image': '//upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        'name': '这是名字',
        'desc': '写了323.24k字·1.2k喜欢',
    }]
})