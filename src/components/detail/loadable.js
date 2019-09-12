import React from 'react'
import Loadable from 'react-loadable'

const LoadableComp = Loadable({
    loader: () => import('./'),
    loading() {
        return <div>loading...</div>
    }
})

export default () => <LoadableComp />