import ReactDOM from 'react-dom'
import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const mountNode = document.querySelector('#antd');
const { Header, Footer, Sider, Content } = Layout;
import './layout.scss';

// ReactDOM.render(
//   <>
//     <Layout>
//       <Header>Header</Header>
//       <Content>Content</Content>
//       <Footer>Footer</Footer>
//     </Layout>

//     <Layout>
//       <Header>Header</Header>
//       <Layout>
//         <Sider>Sider</Sider>
//         <Content>Content</Content>
//       </Layout>
//       <Footer>Footer</Footer>
//     </Layout>

//     <Layout>
//       <Header>Header</Header>
//       <Layout>
//         <Content>Content</Content>
//         <Sider>Sider</Sider>
//       </Layout>
//       <Footer>Footer</Footer>
//     </Layout>

//     <Layout>
//       <Sider>Sider</Sider>
//       <Layout>
//         <Header>Header</Header>
//         <Content>Content</Content>
//         <Footer>Footer</Footer>
//       </Layout>
//     </Layout>
//   </>,
//   mountNode,
// );


// 上中下布局
// ReactDOM.render(
//   <Layout className="layout">
//     <Header>
//       <div className="logo" />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//         {new Array(15).fill(null).map((_, index) => {
//           const key = index + 1;
//           return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
//         })}
//       </Menu>
//     </Header>
//     <Content style={{ padding: '0 50px' }}>
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="site-layout-content">Content</div>
//     </Content>
//     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//   </Layout>,
//   mountNode,
// );

// 顶部