import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch, Redirect,Link} from 'react-router-dom'
import Jumplink from '../../components/jumplink/index.js'
import Search from '../search/index.jsx'
import About from '../about/index.js'
import Setting from '../setting/index.js'
import './style.scss';
// import css from './style.css';
// import './style.css';

export default class Index extends React.Component {
	render() {
		let routerdata = [
			{
				path: '/index',
				title: '首页',
			},
			{
				path: '/index/search',
				title: '搜索',
			},
			{
				path: '/index/about',
				title: '关于',
			},
			{
				path: '/index/setting',
				title: '设置',
			},
		];
		return (
			<div className='main-container'>
				<div className='main-container-body'>
					<div className='autoprefixer'>
						autoprefixer
						<div className='image'>image</div>
					</div>
					<div className='pxtorem'>
						设置设置设置设置设置设置postcss
						<input placeholder='我是红色的！' />
					</div>
					{/* <Router>
                    <Switch> */}
					<Route path='/index/search' component={Search}></Route>
					<Route path='/index/about' component={About}></Route>
					<Route path='/index/setting' component={Setting}></Route>
					{/* </Switch>
                </Router> */}
				</div>
				<footer>
					<Jumplink routerdata={routerdata}>1111</Jumplink>
				</footer>
			</div>
		);
	}
}