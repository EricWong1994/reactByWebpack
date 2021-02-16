import * as Server  from './apis/index.js'
import RouterMain from './router/index.js'
import React from 'react'
import ReactDOM from 'react-dom'

process.env.NODE_ENV === 'development' && require('../mock/index.js')

ReactDOM.render(
    <RouterMain></RouterMain>,
    document.querySelector('#app')
)