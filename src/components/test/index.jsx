import React, {useState,useRef,useEffect} from 'react';
export default function Test(props) {
    const [count,setCount] = useState(100);
    const inputEl = useRef(null);
    const btnClick = () => {
        inputEl.current.focus()
    }

    useEffect(() => {
        document.title = `你点击了{count}次`;
    })

    return <div>
        <h2>{props.title}</h2>
        
        <p>点击了{count}次</p>
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>点我</button>
        </div>

        <h3>
            <input ref={inputEl} type="text"/>
            <button onClick={btnClick}>输入框聚焦</button>
        </h3>
    </div>
}
