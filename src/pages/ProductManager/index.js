import { PlusOutlined } from '@ant-design/icons'
import { Table, Tag, Space, Button, Popconfirm, notification } from 'antd'
import { MDBIcon } from 'mdb-react-ui-kit'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { productService } from '../../services/ProductService'
import { domain } from '../../utils/urlPath'

export default function ProductMannamer() {
    const [productList, setProductList] = useState([])

    const getListProducts = async () => {
        try {
            const { data, status } = await productService.getProductList();
            if (status === 200) setProductList(data)
        } catch (err) {
            console.error()
        }
    }
    const deleteProduct = async(product) =>{
        try {
            const { data, status } = await productService.deleteProduct(product?.id);
            if (status === 200) {
                getListProducts()
                openNotificationWithIcon('success')
            }
        } catch (err) {
            console.error()
        }
    }

    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'Thành công',
          description:
            'Xóa sản phẩm thành công',
        });
      };
      
    useEffect(() => {
        getListProducts()
    }, [])


    const columns = [
        {
            title: 'Mã sản phẩm',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'imagesProduct',
            key: 'imagesProduct',
            render: text => <img style={{ width: '60px', height: '60px' }} src={text ?domain+text[0] : 'https://picsum.photos/200'} alt='...' />,
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Hãng',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            key: 'price',
            render: text => <span>{text.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <NavLink to={`/addProduct/`+record?.id} className="btn btn-primary">Sửa</NavLink>
                    <Popconfirm
                        placement="topRight"
                        title='Bạn có muốn xóa?'
                        onConfirm={()=>deleteProduct(record)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">Xóa</button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];


    return (
        <div className='card py-5 px-3'>
            <h3 className="text-center">Quản lý sản phẩm</h3>
            <div className="d-flex justify-content-end">
                <NavLink className="btn btn-primary" size="lagre" to='/addProduct'><MDBIcon fas icon="plus" />  Thêm sản phẩm</NavLink>
            </div>
            <Table columns={columns} dataSource={productList} />
        </div>
    )
}
