import React, { useState,useEffect } from 'react'
import { Form, Input, Button, Checkbox, Select, InputNumber, Upload, message } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import { productService } from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';
export default function AddProduct() {
    const navigate = useNavigate()
    const [files, setFile] = useState([])
    const [categoryList, setCategoryList] = useState([])

    const onFinish = async (values: any) => {
        const formData = new FormData();
        for (const name in values) {
            formData.append(name, values[name]); // there should be values.avatar which is a File object
        }        

        files.forEach(file =>{
            formData.append('ImagesProduct',file)
        })
        
        try {
            const { data, status } = await productService.addProduct(formData);
            if (status === 200) {
                message.success('Thêm sản phẩm thành công');
                navigate('/productManager')
            }
        } catch (err) {
            console.error()
        }
    };

    const getCategoryList = async () => {
        try {
            const { data, status } = await productService.getCategoryList();
            if (status === 200) setCategoryList(data)
        } catch (err) {
            console.error()
        }
    }

    const handleChange = (e)=>{
        setFile([...e.target.files]);
    }

    useEffect(() => {
        getCategoryList()
    },[])

    const renderCategoryList = ()=>{
       return categoryList?.map(category=>{
            return <Select.Option  key={category.id} value={category.id}>{category.name}</Select.Option>
        })
    }
    console.log(`categoryList`, categoryList)
    return (
        <div className='card py-5 px-3'>
            <h3 className="text-center">Thêm sản phẩm</h3>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="catId" label="Nhà sản xuất" rules={[{ required: true }]}>
                    <Select >
                        {renderCategoryList()}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Giá tiền"
                    name="price"
                    rules={[{ required: true, message: 'Vui lòng nhập giá tiên!' }]}
                >
                    <InputNumber style={{ width: '40%' }} />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Hình ảnh">
                <input type="file" id="file" multiple name="file" onChange={handleChange}
                accept="image/png, image/jpg, image/jpeg"
    />
                    {/* <Form.Item name="imagesProduct" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item> */}
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
