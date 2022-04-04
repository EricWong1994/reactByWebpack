import React from 'react';
import { Form, Input, Button, PlusOutlined, Space } from 'antd';

const Formlistjubujiaoyan = () => {
	const [form] = Form.useForm();
	const btnClk = () => {
		const index = 0;
		form.validateFields([
			['users', index, 'firstName'],
			['users', index, 'lastName'],
		]).then(values => {
			console.log(
				values.users[index].firstName,
				values.users[index].lastName
			);
		});
		// 作者：zxh0907
		// 链接：https://juejin.cn/post/6844904176770613261
	};

	const validatorFn = (rule, value, callback) => {
		console.log('value: ', value);
		try {
			const users = form.getFieldValue('users');
			// 统计已选择项的重复次数
			const repeatCount = (users || []).filter(
				item => item && value && item.name === value
			).length;
			console.log(users, value, repeatCount);
			// Warning: `callback` is deprecated. Please return a promise instead.
			return Promise.reject('name重复');
			// if (repeatCount <= 1) {
			// 	return callback();
			// } else {
			// 	return callback('name重复');
			// }
		} catch (e) {
			console.log('e: ', e);
			return Promise.reject('eeeee');

			// return callback(e);
		}
	};

	return (
		<div>
			<Form form={form}>
				<Form.List name='users' rules={[{ validator: validatorFn }]}>
					{/* <Form.List name='users'> */}
					{(fields, { add, remove }) => {
						return (
							<div>
								{fields.map((field, index) => (
									<Space
										key={field.key}
										style={{
											display: 'flex',
											marginBottom: 5,
											justifyContent: 'center',
										}}
										align='start'
									>
										<Form.Item
											{...field}
											name={[field.name, 'firstName']}
											fieldKey={[
												field.fieldKey,
												'firstName',
											]}
											rules={[
												{
													required: true,
													message:
														'please input firstName',
												},
											]}
										>
											<Input placeholder='first name' />
										</Form.Item>
										<Form.Item
											{...field}
											name={[field.name, 'lastName']}
											fieldKey={[
												field.fieldKey,
												'lastName',
											]}
											rules={[
												{
													required: true,
													message:
														'please input lastName',
												},
											]}
										>
											<Input placeholder='last name' />
										</Form.Item>
									</Space>
								))}
								<Form.Item
									style={{ width: '50%', margin: '0 auto' }}
								>
									<Button
										type='dashed'
										onClick={() => {
											add();
										}}
										block
									>
										{/* <PlusOutlined /> */}
										添加行
									</Button>
								</Form.Item>
							</div>
						);
					}}
				</Form.List>
				<Form.Item
					label='分组'
					name='group'
					rules={[{ required: true, message: '请输入预付款金额' }]}
				>
					<Input />
				</Form.Item>
				<Button onClick={btnClk}>验证</Button>
			</Form>
		</div>
	);
};

export default Formlistjubujiaoyan;

/**
 * 重新校验表单项
 */
const revalidate = () => {
	// 延迟计算，避免之前对数据的操作导致 getFieldValue 时数据不一致
	setTimeout(() => {
		// 获取全部 form item
		const users = form.getFieldValue('users');
		// 校验每一个 propertyValueId
		form.validateFields(
			(users || []).map((item, index) => ['users', index, 'name'])
		);
	}, 100);
};
rule: [
	{
		// validator: (rule, value, callback) => {
		validator: (rule, value) => {
			try {
				const users = form.getFieldValue('users');
				// 统计已选择项的重复次数
				const repeatCount = (users || []).filter(
					item => item && value && item.name === value
				).length;
				console.log(users, value, repeatCount);
				// Warning: `callback` is deprecated. Please return a promise instead.
				return Promise.reject('name重复');
				// if (repeatCount <= 1) {
				// 	return callback();
				// } else {
				// 	return callback('name重复');
				// }
			} catch (e) {
				console.log('e: ', e);
				return Promise.reject('eeeee');

				// return callback(e);
			}
		},
	},
];

// const validatorFn = (rule, value, callback) => {
//     try {
//         console.log('value: ', value);
//         const users = form.getFieldValue('users');
//         // 统计已选择项的重复次数
//         const repeatCount = (users || []).filter(
//             item => item && value && item.name === value
//         ).length;
//         console.log(users, value, repeatCount);
//         if (repeatCount <= 1) {
//             return callback();
//         } else {
//             return callback('name重复');
//         }
//     } catch (e) {
//         return callback(e);
//     }
// };
