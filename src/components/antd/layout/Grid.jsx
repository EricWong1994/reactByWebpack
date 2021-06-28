// import { Row, Col } from 'antd';
import { Row, Col, Divider } from 'antd';
import ReactDOM from 'react-dom'
import React from 'react'
const mountNode = document.querySelector('#antd');
import './index.scss';
// ReactDOM.render(
//   <>
//     <Row>
//       <Col span={24}>col</Col>
//     </Row>
//     <Row>
//       <Col span={12}>col-12</Col>
//       <Col span={12}>col-12</Col>
//     </Row>
//     <Row>
//       <Col span={8}>col-8</Col>
//       <Col span={8}>col-8</Col>
//       <Col span={8}>col-8</Col>
//     </Row>
//     <Row>
//       <Col span={6}>col-6</Col>
//       <Col span={6}>col-6</Col>
//       <Col span={6}>col-6</Col>
//       <Col span={6}>col-6</Col>
//     </Row>
//   </>,
//   mountNode,
// );


const style = { background: '#0092ff', padding: '8px 0' };
ReactDOM.render(
    <>
      <Divider orientation="left">Horizontal</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      {/* 根据屏幕宽度响应间距 */}
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Vertical</Divider>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>,
    mountNode,
  );