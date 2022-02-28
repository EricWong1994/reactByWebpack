const marked = require('marked');

module.exports = source => {
    console.log('source', source); // source # About
    // return 'hello loader ~'
    return 'console.log("hello loader ~")' // 王石浩 this is a markdown file.


//      // 1. 将 markdown 转换为 html 字符串
//   const html = marked(source)
//   // html => '<h1>About</h1><p>this is a markdown file.</p>'
//   // 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
//   const code = `module.exports = ${JSON.stringify(html)}`
//   return code 
//   // code => 'export default "<h1>About</h1><p>this is a markdown file.</p>"'


    // 方法2

    // const html = marked(source);
    // return html;
}