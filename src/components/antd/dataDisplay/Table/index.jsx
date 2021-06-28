import React from 'react';
import { Table, Tag, Space } from 'antd';

const TableTest = () => {
    // const dataSource = [
    //     {
    //         key: '1',
    //         name: '胡彦斌',
    //         age: 32,
    //         address: '西湖区湖底公园1号',
    //     },
    //     {
    //         key: '2',
    //         name: '胡彦祖',
    //         age: 42,
    //         address: '西湖区湖底公园1号',
    //     },
    // ];

    // const columns = [
    //     {
    //         title: '姓名',
    //         dataIndex: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: '年龄',
    //         dataIndex: 'age',
    //         key: 'age',
    //     },
    //     {
    //         title: '住址',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    // ]

    // 基本用法
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                // console.log('text: ', text);
                // console.log('record: ', record);
                return (
                
                    <Space size="middle">
                        <a>Invite {record.name}</a>
                        <a>Delete</a>
                    </Space>
                )
            }
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    );
}

export default TableTest;
