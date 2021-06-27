import React, { Component, useImperativeHandle, forwardRef, useRef } from 'react';

class ForwardRefTest extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.fancyButton = React.createRef();
        // this.node = this.myRef.current;
        this.btnClk = this.btnClk.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this);
        // console.log('ref: ', ref);
    }
    btnClk = () => {
    // btnClk(){
        console.log('this.fancyButton.current: ', this.fancyButton.current);
        // this.textInput.current.focus();
        this.fancyButton.current.focus()
    }

    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：我们通过 "current" 来访问 DOM 节点
        console.log('this: ', this);
        // this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <FancyButton ref={this.fancyButton}>FancyButton</FancyButton>;
                <button onClick={this.btnClk}>父组件按钮</button>

                <div>分割线</div><br></br>

                <input
                type="text"
                ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

// const FancyButton = React.forwardRef((props, ref) => {
//     // console.log('ref111: ', ref);
//     const btnClick = () => {
//         console.log('btnClick: ');
//     }

//     return <button
//         ref={ref} // 使用useImperativeHandle 前
//         className='FancyButton'
//         onClick={btnClick}
//     >
//         {props.children}
//     </button>
// })

const FancyButton = React.forwardRef((props, ref) => {
    console.log('ref111: ', ref);
    const btnClick = () => {
        console.log('btnClick: ');
    }
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        console.log('focus999999999999: ');
        inputRef.current.focus();
        // ref.current.focus(); // 不要写这行，会死循环
      }
    }));

    return <button
        ref={inputRef}  // 使用useImperativeHandle后
        className='FancyButton'
        onClick={btnClick}
    >
        {props.children}
    </button>
})

export default ForwardRefTest;
// export default <FancyButton ref={ref}>Click me!</FancyButton>; // 报错


// function FancyInput(props, ref) {
//     const inputRef = useRef();
//     useImperativeHandle(ref, () => ({
//       focus: () => {
//         inputRef.current.focus();
//         console.log('focus: ');
//       }
//     }));
//     return <input ref={inputRef} />;
//   }
// FancyInput = forwardRef(FancyInput);
// export default FancyInput;