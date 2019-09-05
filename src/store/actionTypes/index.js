// 暂时用不到  在相应模块引入对应的文件即可  不需要引入全部

import * as headerActionTypes from './headerActionTypes'
import * as homeActionTypes from './homeActionTypes'

export default {
    ...headerActionTypes,
    ...homeActionTypes,
}
