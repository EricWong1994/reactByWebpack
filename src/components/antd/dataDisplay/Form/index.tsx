import { Form, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
import FormMethods from './FormMethods';
import FormLayoutDemo from './FormLayoutDemo';
import FormLayoutRequiredMark from './FormLayoutRequiredMark'; // 必选样式
// 非阻塞校验
import NoBlockRule from './NoBlockRule';
import FormListjubujiaoyan from './Validate/FormListjubujiaoyan';
import Threebasecase from './Validate/Threebasecase';
// // 动态增减表单项
import DynamicFieldSet from './DynamicFieldSet';
// 动态增减嵌套表单项
import DynamicFormnestItems from './DynamicFormnestItems';
// 复杂的动态增减表单项
import ComplexDynamicFormItem from './ComplexDynamicFormItem';
// 嵌套结构与校验信息
import Nest from './Nest';
// 复杂一点的控件
import ComplexFormControl from './ComplexFormControl';
// 自定义表单控件
import CustomizedFormControls from './CustomizedFormControls';
import ColorPicker from './DIYFormItem/ColorPicker';
// 表单数据存储于上层组件
import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 多表单联动
import ControlBetweenForms from './ControlBetweenForms';
// 内联登录栏
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 登录框
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 注册新用户
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 高级搜索
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 弹出层中的新建表单
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 时间类控件
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 自行处理表单数据
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 自定义校验
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 动态校验规则
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';
// 校验其他组件
// import StoreFormDataintoUpperComponent from './StoreFormDataintoUpperComponent';

const mountNode = document.querySelector('#antd');

// const Demo = () => {
// 	const onFinish = (values: any) => {
// 		console.log('Success:', values);
// 	};

// 	const onFinishFailed = (errorInfo: any) => {
// 		console.log('Failed:', errorInfo);
// 	};

// 	return (
// 		<Form
// 			name='basic'
// 			labelCol={{ span: 8 }}
// 			wrapperCol={{ span: 16 }}
// 			initialValues={{ remember: true }}
// 			onFinish={onFinish}
// 			onFinishFailed={onFinishFailed}
// 			autoComplete='off'
// 		>
// 			<Form.Item
// 				label='Username'
// 				name='username'
// 				rules={[
// 					{ required: true, message: 'Please input your username!' },
// 				]}
// 			>
// 				<Input />
// 			</Form.Item>

// 			<Form.Item
// 				label='Password'
// 				name='password'
// 				rules={[
// 					{ required: true, message: 'Please input your password!' },
// 				]}
// 			>
// 				<Input.Password />
// 			</Form.Item>

// 			<Form.Item
// 				name='remember'
// 				valuePropName='checked'
// 				wrapperCol={{ offset: 8, span: 16 }}
// 			>
// 				<Checkbox>Remember me</Checkbox>
// 			</Form.Item>
// 			<Form.Item>
// 				{}
// 			</Form.Item>

// 			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
// 				<Button type='primary' htmlType='submit'>
// 					Submit
// 				</Button>
// 			</Form.Item>
// 		</Form>
// 	);
// };

const FormIndex = () => {
	return (
		<div>
			{/* 简单的表单联动 */}
			{/* <FormMethods /> */}
			{/* <FormLayoutDemo /> */}
			{/* <FormLayoutRequiredMark /> */}
			{/* <NoBlockRule /> */}
			{/* <DynamicFieldSet /> */}
			{/* <DynamicFormnestItems /> */}
			{/* <ComplexDynamicFormItem /> */}
			{/* 嵌套结构与校验信息 */}
			{/* <Nest /> */}
			{/* 复杂一点的控件 */}
			{/* <ComplexFormControl /> */}
			{/* 自定义表单控件 */}
			{/* <CustomizedFormControls /> */}
			{/* 自定义表单-颜色选择器 ColorPicker */}
			{/* <ColorPicker /> */}
			{/* 表单数据存储于上层组件 */}
			{/* <StoreFormDataintoUpperComponent /> */}
			{/* 多表单联动 */}
			{/* <ControlBetweenForms /> */}

			{/* 校验 */}
			{/* <FormListjubujiaoyan /> */}
			{/* 3中校验时机 */}
			<Threebasecase />
		</div>
	);
};
ReactDOM.render(<FormIndex />, mountNode);

// https://stackoverflow.com/questions/64656055/react-refers-to-a-umd-global-but-the-current-file-is-a-module

// export default Demo;