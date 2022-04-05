// ./remove-comments-plugin.js
// 所以我们这里定义一个 RemoveCommentsPlugin 类型，然后在这个类型中定义一个 apply 方法，这个方法会在 Webpack 启动时被调用，它接收一个 compiler 对象参数，这个对象是 Webpack 工作过程中最核心的对象，里面包含了我们此次构建的所有配置信息，我们就是通过这个对象去注册钩子函数，具体代码如下：
class RemoveCommentsPlugin {

    apply (compiler) {
  
      console.log('RemoveCommentsPlugin 启动')
  
      // compiler => 包含了我们此次构建的所有配置信息
      // emit 即将向输出目录输出文件时执行
      compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
        // compilation => 可以理解为此次打包的上下文
        for (const name in compilation.assets) {
          console.log('name', name) // 这里会输出文件名称：bundle.js index.html
            // console.log(compilation.assets[name].source()) // 输出文件内容

            if (name.endsWith('.js')) {
                const contents = compilation.assets[name].source()
                const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
                compilation.assets[name] = {
                  source: () => noComments,
                  size: () => noComments.length
                }
            }
        }
      })
    }
  
}

module.exports = RemoveCommentsPlugin;