import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../../components/menu/index.js'
import Test from '../../components/test/index.jsx';
import ButtonL from '../../components/antd/genneral/ButtonL/index.jsx';
// import name from '@/components';
import TableTest from '@components/antd/dataDisplay/Table';
export default class About extends React.Component {
    render() {
        let routerdata = [
            {
                path: '/index/search',
                title: '搜索'
            },
            {
                path: '/index/about',
                title: '关于'
            },
            {
                path: '/index/setting',
                title: '设置'
            }
            // {
            //     path: '/index/antd',
            //     title: '设置'
            // }
        ]
        return <div>
            {/* <Test 
            title='父组件参数'
            /> */}
            {/* <Menu routerdata={routerdata}>1111</Menu> */}
            {/* 我是antd */}
            {/* <ButtonL/> */}
            
            {/* Table组件 */}
            <TableTest></TableTest>
        </div>
    }
}