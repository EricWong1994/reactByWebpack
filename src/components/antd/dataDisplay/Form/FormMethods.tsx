import { Form, Input, Button, Select } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
const { Option } = Select;
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};

const FormMethods = () => {
	const [form] = Form.useForm();

	const onGenderChange = (value: any) => {
		console.log('onGenderChange value: ', value);
		switch (value) {
			case 'male':
				form.setFieldsValue({
					note: 'Hi, man!',
				});
				return;

			case 'female':
				form.setFieldsValue({
					note: 'Hi, lady!',
				});
				return;

			case 'other':
				form.setFieldsValue({
					note: 'Hi there!',
				});
		}
	};

	const onFinish = (values: any) => {
		console.log('values', values);
	};

	const onReset = () => {
		form.resetFields();
	};

	const onFill = () => {
		form.setFieldsValue({
			note: 'Hello world!',
			gender: 'male',
		});
	};

	const btnClick = () => {
		// 类型“{ note: string; }”的参数不能赋给类型“FieldData[]”的参数。
		// 对象文字可以只指定已知属性，并且“note”不在类型“FieldData[]”中。
		// form.setFields({ note: 'hi, there' })
		// 该方法会自动触发submit，成功则执行onFinish，
		// form.setFields([
		// 	{
		// 		name: 'gender',
		// 		value: '测试性别',
		// 		errors: ['error message'],
		// 	},
		// 	{
		// 		name: 'note',
		// 		value: '测试notes',
		// 		errors: ['error message'],
		// 	},
		// ]);

		form.setFieldsValue({
			// note: 'Hi, man!',
			gender: '测试性别',
		});
		// form.setFields([
		// 	{
		// 		name: 'gender',
		// 		value: '测试性别',
		// 		errors: ['error message'],
		// 	},
		// ]);
	};

	return (
		<Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
			<button onClick={btnClick}>按钮</button>
			{/* <Form.Item
				name='note'
				label='Note'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item> */}
			<Form.Item
				name='gender'
				label='Gender'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select
					placeholder='Select a option and change input text above'
					onChange={onGenderChange}
					allowClear
				>
					<Option value='male'>male</Option>
					<Option value='female'>female</Option>
					<Option value='other'>other</Option>
				</Select>
			</Form.Item>
			{/* 联动 */}
			<Form.Item
				noStyle
				shouldUpdate={(prevValues, currentValues) =>
					prevValues.gender !== currentValues.gender
				}
			>
				{({ getFieldValue }) =>
					getFieldValue('gender') === 'other' ? (
						<Form.Item
							name='customizeGender'
							label='Customize Gender'
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input />
						</Form.Item>
					) : null
				}
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
				<Button htmlType='button' onClick={onReset}>
					Reset
				</Button>
				<Button type='link' htmlType='button' onClick={onFill}>
					Fill form
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormMethods;

// ReactDOM.render(<FormMethods />, mountNode);
