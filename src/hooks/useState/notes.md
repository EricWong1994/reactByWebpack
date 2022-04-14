　　1、useState触发重新渲染，useRef不触发。

　　2、useState异步更新其值，useRef同步更新。

useRef 总共有两种用法：
　　1、获取子组件的实例
　　2、在函数组件中的一个全局变量，不会因为重复 render 重复申明， 类似于类组件的 this.xxx

　　有些情况下，我们需要保证函数组件每次 render 之后，某些变量不会被重复申明，比如说 Dom 节点，定时器的 id 等等。

useStateDemo
useRefDemo
[掘金](https://juejin.cn/post/6996171186719686693)