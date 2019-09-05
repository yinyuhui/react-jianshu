import Mock from 'mockjs'

const list = ["微信","支付宝","蚂蚁金服","诈骗","借呗","被骗","盗窃","Python","了","java","这","于","下","二","不","要","是","来","有","着","它","我","大","里","中","他","人","女","上","男","把","在","一","前端","的","你","Android","vue","iOS","光大永明","抖音","区块链","产品经理","挠脚心","华厦 眼科","嘉多保","中秋","Java","理财","故事"]

export default Mock.mock('/searchInfo', 'get', {
    success: true,
    'list|10': [{
        'id|+1': 1,
        'label|+1': list
    }]
})