import React from 'react';
import { Form, Input, message, Button, Space } from 'antd';

const NoBlockRule = () => {
	const [form] = Form.useForm();

	const onFinish = () => {
		message.success('Submit success!');
	};

	const onFinishFailed = () => {
		message.error('Submit failed!');
	};

	const onFill = () => {
		form.setFieldsValue({
			url: 'https://taobao.com/',
		});
	};

	return (
		<Form
			form={form}
			layout='vertical'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item
				name='url'
				label='URL'
				rules={[
					{
						required: true,
					},
					// 即当输入的条件不为url，但满足其它条件时，不会阻塞onFinish
					{
						type: 'url',
						warningOnly: true,
					},
					{
						type: 'string',
						min: 6,
					},
				]}
			>
				<Input placeholder='input placeholder' />
			</Form.Item>
			<Form.Item>
				<Space>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
					<Button htmlType='button' onClick={onFill}>
						Fill
					</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};
export default NoBlockRule;

// ReactDOM.render(<Demo />, mountNode);
