如果你对 Vue 很了解，你肯定知道其 computed 计算属性，底层是使用了 getter，只不过是对象的 getter。那么在 React 中，我们也可以使用类的 getter 来实现计算属性：



```
class Example extends Component {  state = {    firstName: '',    lastName: '',  };
  // 通过getter而不是函数形式，减少变量  get fullName() {    const { firstName, lastName } = this.state;    return`${firstName} ${lastName}`;  }
  render() {    return<Fragment>{this.fullName}</Fragment>;  }}
```

复制代码



### 进一步，使用 memoization 优化计算属性



上文有提到在 Vue 中计算属性对比函数执行，会有缓存，减少计算。因为计算属性只有在它的相关依赖发生改变时才会重新求值。



这就意味着只要  firstName 和 lastName 还没有发生改变，多次访问 fullName 计算属性会立即返回之前的计算结果，而不必再次执行函数。



对比之下，React 的 getter 是否也有缓存这个优势？？？ **答案是：没有。React 中的 getter 并没有做缓存优化**！



不过不用失望，我们可以使用记忆化技术（memoization）来优化我们的计算属性，达到和 Vue 中计算属性一样的效果。我们需要在项目中引入 memoize-one 库，代码如下：



```
import memoize from'memoize-one';import React, { Fragment, Component } from'react';
class Example extends Component {  state = {    firstName: '',    lastName: '',  };
  // 如果和上次参数一样，`memoize-one` 会重复使用上一次的值。  getFullName = memoize((firstName, lastName) =>`${firstName} ${lastName}`);
  get fullName() {    returnthis.getFullName(this.state.firstName, this.state.lastName);  }
  render() {    return<Fragment>{this.fullName}</Fragment>;  }}
```

复制代码