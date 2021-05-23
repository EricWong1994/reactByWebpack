// const React = {
//     useState: (initialValue) => {
//         const hooks = [];
//         const setState = 
//         return []
//     }
// }

// 1 useState简单实现
// const React =(() => {
//     let val;
//     return {
//         useState: (initialValue) => {
//             val = val || initialValue;
//             // 是否更新
//             // isUpdate
//             const setValue = (newVal) => {
//                 val = newVal || val;
//             }

//             return [val, setValue]
//         }
//     }
// })()

// function Counter() {
//     const [count, setCount] = React.useState(0);
//     return {
//         render: () => {console.log(count)},
//         click: () => setCount(count + 1)
//     }
// }
// Counter().render()

// 2 useEffect简单实现

const React = (() => {
    let _deps, _val;
    function useEffect(callback, deps) {
        const isInit = !deps
        const isUpdate = _deps ? !_deps.every((item, index) => item === deps[index]) : true;
        if (isUpdate || isInit) {
            _deps = deps || [];
            callback()
        };
    }
    function useState(initialValue){
        _val = _val || initialValue;
        // 是否更新
        // isUpdate
        const setValue = (newVal) => {
            _val = newVal || _val;
        }

        return [_val, setValue]
    }
    return {
        useEffect,
        useState
    }
})();

function Counter() {
    const [count, setCount] = React.useState(0);
    const {useEffect} = React;
    useEffect(() => {
        console.log('useEffect执行了', count);
    }, [count])

    return {
        render: () => {console.log(count)},
        click: () => setCount(count + 1),
        noop: () => setCount(count)
    }
}
Counter().render();
Counter().noop();
Counter().render();
Counter().click();
Counter().render();
