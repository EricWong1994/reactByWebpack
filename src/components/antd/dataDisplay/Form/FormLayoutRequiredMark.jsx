import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const FormLayoutRequiredMark = () => {
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState('optional');

	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		console.log('requiredMarkValue: ', requiredMarkValue);
		setRequiredMarkType(requiredMarkValue);
	};
	const onFinish = values => {
		console.log('onFinish', values);
	};

	return (
		<Form
			form={form}
			layout='vertical'
			initialValues={{
				requiredMarkValue: requiredMark,
			}}
			onValuesChange={onRequiredTypeChange}
			requiredMark={requiredMark}
			onFinish={onFinish}
		>
			<Form.Item label='Required Mark' name='requiredMarkValue'>
				<Radio.Group>
					<Radio.Button value='optional'>Optional</Radio.Button>
					<Radio.Button value>Required</Radio.Button>
					<Radio.Button value={false}>Hidden</Radio.Button>
				</Radio.Group>
			</Form.Item>
			<Form.Item
				label='Field A'
				required
				tooltip='This is a required field'
			>
				<Input placeholder='input placeholder' />
			</Form.Item>
			<Form.Item
				label='Field B'
				tooltip={{
					title: 'Tooltip with customize icon',
					icon: <InfoCircleOutlined />,
				}}
			>
				<Input placeholder='input placeholder' />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormLayoutRequiredMark;
// ReactDOM.render(<FormLayoutDemo />, mountNode);
