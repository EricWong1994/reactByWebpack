// import createHeading from './heading.js'

// const heading = createHeading()

// document.body.append(heading)

// markdown-loader的使用
import about from './about.md'
console.log('about', about) //  这段只有在html引入时才执行
document.getElementsByClassName('container')[0].innerHTML = about; // 页面就显示markdown格式了。

// about <h1 id="about">About</h1>
// <p>王石浩 this is a markdown file.</p>

// import {a} from './test'
console.log('hhhh');
// console.log('gggg');
import t from './util.js';