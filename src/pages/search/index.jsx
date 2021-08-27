import React,{useState,useEffect,useRef} from 'react';
import Menu from 'menu';
import './index.css';

export default function Search () {
    const [count,setCount] = useState(0);
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus()
    };

    useEffect(() => {
        document.title = `你点击了{count}次`;
    })

    return (
        <div>
             <form action='#'  className='input-kw-form'>
                        <input
                            className='input-kw'
                            placeholder='点击输入要搜索的内容'
                            type='search'
                            // value={searchContent}
                            /* focus={props.autoFocus} */
                            // onInput={onInputChange}
                            // onConfirm={onInputConfirm}
                        />
                </form>
            <p>点击了{count}次</p>
            <Menu>
                测试Menu
            </Menu>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    点我1
                </button>
            </div>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>点击按钮input聚焦</button>
        </div>
    )
}

// static propTypes = {
//     shouldLoadData:  // 滚动到页面底部请求数据
//     apiName: // FeedListApi 里面需要请求的api Name
//     feedType:  // 卡片类型
//     filter:     // 接口参数
//     page:  // 页码
//     pageSize:  // pageSize
//     pageNumKey:  // 分页字段key，默认为page
//     pageNumInitial:  // 分页起始值，默认为1
//     forceUpdate: // 强制刷新
//     noResClass:  // 暂无数据 classname
//     noResStyle:  // 暂无数据 noResStyle
//     noMoreStyle:  // noMoreStyle
//     onLoadDataDone: // update重新请求数据时触发
//     lightTheme: // 是否白色feed背景 默认 false
//     currentTopBarIndex:  // 卡片索引
//     monitorParam: // 埋点附加参数
// };