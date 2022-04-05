const marked = require('marked');

// module.exports = source => {
module.exports = function(source) {
    // console.log('this', this); // source # About 王石浩 this is a markdown file.
    // console.log('source', source); // source # About 王石浩 this is a markdown file.

    // return 'hello loader ~'
    // return 'console.log("hello loader ~")' // 这段代码会

// 方法1 只用markdown-loader 处理
//      // 1. 将 markdown 转换为 html 字符串
//   const html = marked(source)
  // html => '<h1>About</h1><p>this is a markdown file.</p>'
  // 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
//   const code = `module.exports = ${JSON.stringify(html)}`
//   return code 
//   // code => 'export default "<h1>About</h1><p>this is a markdown file.</p>"'


    // 方法2 生成的html，交由html-loader进行处理

    const html = marked(source);
    // console.log('html: ', html); 
    // html:  <h1 id="about">About</h1>
    // {/* <p>王石浩 this is a markdown file.</p> */}
    return html;
}