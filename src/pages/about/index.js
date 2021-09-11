import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../../components/menu/index.js'
import Test from '../../components/test/index.jsx';

export default class About extends React.Component {
    render() {
       
        return <div>
            <Test 
            title='父组件参数'
            />
            我是About
        </div>
    }
}