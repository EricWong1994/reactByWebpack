import { BackTop } from 'antd';
import ReactDOM from 'react-dom'
import React from 'react'
const mountNode = document.querySelector('#antd');
import './backTop.scss'

// ReactDOM.render(
//   <>
//     <div className='test' >test</div>
//     <BackTop />
//     Scroll down to see the bottom-right
//     <strong className="site-back-top-basic"> gray </strong>
//     button.
//   </>,
//   mountNode,
// );

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

// const target = a => {
//     console.log('a: ', a);

// }
const target = a => window;

ReactDOM.render(
<div style={{ height: '600vh', padding: 8 }}>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <BackTop
        duration={100}
        target={target}
        visibilityHeight={100}
        // onClick={}
    >
        <div
            style={style}>UP</div>
    </BackTop>
</div>,
mountNode,
);