import { Radio } from 'antd'
import { MDBContainer } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import Slider from '../../components/Slider'
import { storeProducts } from '../../data'
import { productService } from '../../services/ProductService'

export default function Home() {
    const [productList, setProductList] = useState([])
    const [categoryList, setCategoryList] = useState([])

    const getListProducts = async () => {
        try {
            const { data, status } = await productService.getProductList();
            if (status === 200) setProductList(data)
        } catch (err) {
            console.error()
        }
    }

    const getListProductsByCategory = async (category) => { 
        try {
            const { data, status } = await productService.getProductList();

            if (status === 200) setProductList(category==='All'? data :data?.filter(product => product.category===category))
        } catch (err) {
            console.error()
        }
    }

    const getCategoryList = async () => {
        try {
            const { data, status } = await productService.getCategoryList();
            if (status === 200) setCategoryList(data)
        } catch (err) {
            console.error()
        }
    }

    useEffect(() => {
        getListProducts()
        getCategoryList()
    }, [])

    
    const renderFilter = ()=>{
        return categoryList?.map(category=>{
            return<Radio.Button key={category.id} value={category.name}>{category.name}</Radio.Button>
        })
    }
 
    const filterMobile=(e)=>{
        getListProductsByCategory(e.target.value)
    }

    return (
        <div>
            <Slider />
            <MDBContainer className="py-5">
                <h1 className='mb-5 text-center'>Danh sách sản phẩm</h1>
                <Radio.Group onChange={filterMobile} className='mb-5 p-3 d-flex justify-content-end' defaultValue="All" size="large" buttonStyle="solid">
                    <Radio.Button key='0' value='All'>Tất cả</Radio.Button>
                    {renderFilter()}
                </Radio.Group>
                <ProductList  produtList={productList} />
            </MDBContainer>
        </div>
    )
}
