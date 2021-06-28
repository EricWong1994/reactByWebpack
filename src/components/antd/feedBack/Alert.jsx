import { Alert } from 'antd';
import ReactDOM from 'react-dom'
import React from 'react'
const mountNode = document.querySelector('#antd');

ReactDOM.render(<Alert message="Success Text" type="success" />, mountNode);