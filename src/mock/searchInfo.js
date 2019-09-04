import Mock from 'mockjs'

export default Mock.mock('/searchInfo', 'get', {
    success: true,
    'list|1-10': [{
        'id|+1': 1,
        'label|+1': ['微信', '蚂蚁金服', '蚂蚁', '借呗', '被骗', '盗窃', 'python', 'Java']
    }]
})