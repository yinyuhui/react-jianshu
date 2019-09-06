import Mock from 'mockjs'

const imageList = [
    'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
]

const titleList = ['简书会员', '优选连载', '简书版权', '简书大学堂']

export default Mock.mock('/recommendList', 'get', {
    success: true,
    "list|4": [{
        "id|+1": 1,
        "image|+1": imageList,
        "title|+1":  titleList
    }]
})