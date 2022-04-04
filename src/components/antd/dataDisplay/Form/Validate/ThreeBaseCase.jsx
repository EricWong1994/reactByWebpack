import { Form, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const Threebasecase = () => {
	const [form] = Form.useForm();
	return (
		<Form form={form}>
			<Form.Item
				name='username'
				//validateTrigger='onBlur'   两种都可以
				validateTrigger={['onBlur']}
				// validateTrigger={['onBlur', 'onChange']}
				rules={[
					{
						required: true,
						message: '请输入用户名',
						//validateTrigger : 'onBlur'
						validateTrigger: ['onBlur'],
						// validateTrigger: ['onChange'],
					},
					{
						validator: (_, value) => {
							//自定义校验加判断，一定要加上 value && 否则不近会出现定义好的错误信息，还有系统的错误信息
							if (value && value.toUpperCase() !== 'ADMIN') {
								return Promise.reject('该用户不存在');
							}
							return Promise.resolve();
						},
						validateTrigger: ['onSubmit'],
					},
				]}
			>
				<Input maxLength={16} placeholder='用户名' />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					提交
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Threebasecase;
