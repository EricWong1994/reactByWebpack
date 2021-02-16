import React from 'react'
import ReactDOM from 'react-dom'

export default class Search extends React.Component {
    render() {
        let listdata = [
            {
                path: '/search',
                title: '搜索'
            },
            {
                path: '/about',
                title: '关于我们'
            },
            {
                path: '/setting',
                title: '设置'
            }
            
        ]
        return <div>
            我是Search
        </div>
    }
}