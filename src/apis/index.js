/* eslint-disable @typescript-eslint/no-var-requires */
import Axios from 'axios';
// const queryString = require('querystring');
// eslint-disable-next-line no-undef
const qs = require('qs');
// eslint-disable-next-line no-undef
var env = process.env.NODE_ENV;

// if (env === 'development') {
// 当请求地址为'/'时，会有默认地址
//     Axios.defaults.baseURL = 'http://127.0.0.1:3000'
// }
// else {
// }

// if(env === 'production') {
if (env === 'development') {
	Axios.defaults.baseURL = 'http://localhost:3000';
	// Axios.defaults.baseURL = 'http://39.106.162.247:3000'

	Axios.interceptors.request.use(
		config => {
			//请求拦截
			// if(config.method !== 'post') {
			//     alert('请使用post请求')
			// }
			return Promise.resolve(config);
		},
		error => {
			// 对请求错误做些什么
			return Promise.reject(error);
		}
	);

	Axios.interceptors.response.use(
		// server.interceptors.response.use(
		response => {
			// 对响应数据做点什么
			if (response.status === 200) {
				return response;
			}
		},
		err => {
			console.log('err: ', err);
			// let status = err.response.status;
			// switch (+status) {
			// 	case 404:
			// 		alert('页面未找到');
			// }
			return Promise.reject(err);
		}
	);
}

function post(url, params) {
	return new Promise((resolve, reject) => {
		// Axios.post(url, queryString.stringify(params))
		Axios.post(url, qs.stringify(params))
			// Axios.post(url, params)
			// Axios.post(url, 'a=1&b=2')
			.then(res => {
				resolve(res);
			})
			.catch(err => {
				reject(err);
			});
	});
}

function get(url, params) {
	return new Promise((resolve, reject) => {
		// Axios.get(url, queryString.stringify(params))
		// Axios.get(url, qs.stringify(params))
		Axios.get(url, {
			params,
		})
			.then(res => {
				resolve(res);
			})
			.catch(err => {
				reject(err);
			});
	});
}

export { post, get };

// https://juejin.cn/post/6992763139645243405
