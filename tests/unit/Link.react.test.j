// // Link.react.test.js
// import React from 'react';
// import renderer from 'react-test-renderer';
// import { act } from 'react-dom/test-utils';
// import { unmountComponentAtNode } from "react-dom";
// import Link from './Link.react';

// let container = null;
// beforeEach(() => {
// 	// 创建一个 DOM 元素作为渲染目标
// 	container = document.createElement("div");
// 	document.body.appendChild(container);
// });

// afterEach(() => {
// 	// 退出时进行清理
// 	unmountComponentAtNode(container);
// 	container.remove();
// 	container = null;
// });
// // test('Link changes the class when hovered', () => {

//   // const component = renderer.create(
//   //   <Link page="http://www.facebook.com">Facebook</Link>,
//   // );
//   // let tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // tree.props.onMouseEnter();
//   // // act(() => {
//   // //   tree.props.onMouseEnter();
//   // // })
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // tree.props.onMouseLeave();
//   // // act(() => {
//   // //   tree.props.onMouseLeave();
//   // // })
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
// // });