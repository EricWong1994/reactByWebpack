import React from "react";
import _ from 'lodash'

function hoc(ComponentClass) {
  return class HOC extends ComponentClass {
    render() {
      let elementTree = super.render();
      console.log('elementTree: ', elementTree);
    let ttt = _.cloneDeep(elementTree);
    ttt.props.children = elementTree.props.children.filter((z) => {
        let a = z.type !== "ul" && z;
        console.log('a', a);
        return a;
    });
    //   elementTree.props.children = elementTree.props.children.filter((z) => {
    // //   let kkk = elementTree.props.children.filter((z) => {
    //     let a = z.type !== "ul" && z;
    //     console.log('a', a);

    //     // return z.type !== "ul" && z;
    //     return a;
    //   });
    //   React 16 中 Props 的只读性
    // Uncaught TypeError: Cannot assign to read only property 'children' of object '#<Object>'
    // https://github.com/weihong1028/blog/issues/3

      const newTree = React.cloneElement(ttt);
      console.log('newTree: ', newTree);
      return newTree;
    }
  };
}

// @hoc
class ComponentClass extends React.Component {
  render() {
    const divStyle = {
      width: "100px",
      height: "100px",
      backgroundColor: "red"
    };

    return (
      <div>
        <p style={{ color: "brown" }}>啦啦啦</p>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <h1>哈哈哈</h1>
      </div>
    );
  }
}
export default ComponentClass;
