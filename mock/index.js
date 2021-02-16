const Mock = require('mockjs');
import P_login_do from './post/login/do/index.js'; 
Mock.mock('/login','post',P_login_do);