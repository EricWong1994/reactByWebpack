## useEffect
[componentDidUpdate(prevProps, prevState, snapshot)](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)
componentDidUpdate() 会在更新后(props变化, state变化)会被立即调用。首次渲染不会执行此方法。

useEffect 第2个参数
1. 不传，则didMount + didUpdate
2. 空数组 类似didMount
3. 依赖数组 类似 didMount + didUpdate

仅模拟 didUpdate
```js
const ref = useRef();
useEffect(() => {
    if (!ref.current) {
        ref.current = true;
    } else {
        console.log('didupdate生命周期');
        // didupdate生命周期;
    }
});
```
## useMemo
现在 React 只会当 props 改变时会重新渲染 CountButton！ 但我们还没有完成，还记得引用相等吗？在 DualCounter 组件中，我们组件函数里定义了 increment1 和 increment2 函数，这意味着每次 DualCounter 重新渲染，那些函数会新创建，因此 React 无论如何会重新渲染两个 CountButton。

我想重申下，在没有测量前，强烈建议不要使用 React.momo （或者它的朋友 PureComponent 和 shouldComponentUpdate），因为优化总会带来成本，并且你需要确保知道会有多少成本和收益，这样你才能决定在你的案例中它是否能真的有帮助（而不是有害的）。正如我们上面所说的那样，一直保持正确是一件很困难的事情，所以你可能无法获得任何好处。

参考
[【译】什么时候使用 useMemo 和 useCallback](https://jancat.github.io/post/2019/translation-usememo-and-usecallback/)

https://kentcdodds.com/blog/usememo-and-usecallback