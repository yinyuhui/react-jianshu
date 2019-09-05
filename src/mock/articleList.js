import Mock from 'mockjs'

export default Mock.mock('/articleList', 'get', {
    'list|5': [{
        'id|+1': 1,
        'image': '//upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        'title': '《二十岁的年纪，做八十岁想起来都会嘴角上扬的事》',
        'desc': '二十岁出头，正好处在一个尴尬的年纪。似乎看透了生活，实质却依旧单纯；似乎应有尽有，实质却一无所有；内心身怀雄心壮志，却又不得不脚踏实地。 身处二...',
    }]
})