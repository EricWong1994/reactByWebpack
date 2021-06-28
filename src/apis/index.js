import Axios from 'axios';
const queryString = require('querystring');
const qs = require('qs');
var env = process.env.NODE_ENV;

// if (env === 'development') {
    // 当请求地址为'/'时，会有默认地址
//     Axios.defaults.baseURL = 'http://127.0.0.1:3000'
// } 
// else {
// }

// if(env === 'production') {
if (env === 'development') {
    Axios.defaults.baseURL = 'http://localhost:3000'
    // Axios.defaults.baseURL = 'http://39.106.162.247:3000'
    Axios.interceptors.response.use(
        // server.interceptors.response.use(
        res => {
            // 对响应数据做点什么
            if (res.status === 200) {
                return res;
            }
        },
        err => {
            let status = err.response.status;
            switch(+status){
                case 404:alert('页面未找到')
            }
            return Promise.reject(err);
        }
    )
    
    Axios.interceptors.request.use(request => {
            //请求拦截
            // if(request.method !== 'post') {
            //     alert('请使用post请求')
            // }
            return Promise.resolve(request)
        }
    )
}

function post(url, params) {
    return new Promise((resolve, reject) => {
        // Axios.post(url, queryString.stringify(params))
        Axios.post(url, qs.stringify(params))
            // Axios.post(url, params)
            // Axios.post(url, 'a=1&b=2')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function get(url, params) {
    return new Promise((resolve, reject) => {
        // Axios.get(url, queryString.stringify(params))
        // Axios.get(url, qs.stringify(params))
        Axios.get(url, {
                params
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export {
    post,
    get
};