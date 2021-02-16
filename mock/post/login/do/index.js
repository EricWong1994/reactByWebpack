const Mock = require('mockjs');
const Random = Mock.Random;
export default params => {
    // params为前端发送请求时,传过来的参数
    console.log(params);
    return {
        // 随机1到10个字
        text:Random.csentence(1,10),
        status:300,
        // 随机1到10的整数
        uid:Random.integer(1,10),
        err:Random.csentence(1,2),
        data:{
            name:'李雷',
            gender:'男'
        }
    }
}