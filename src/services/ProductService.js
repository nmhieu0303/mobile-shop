import axios from "axios"
import { ProductPath } from "../utils/urlPath"

export class ProductService {
    getProductList = () => {
        return axios.get(ProductPath.getProductList)
    }
    getProductDetail = (id) => {
        return axios.get(ProductPath.getProductDetail + id)
    }
    deleteProduct = (id) => {
        return axios.delete(ProductPath.deleteProduct + id)
    }
    addProduct = (product) => {
        return axios.post(ProductPath.addProduct, product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    getCategoryList = ()=>{
        return axios.get(ProductPath.getCategoryList)
    }

    updateProduct = (id,product)=>{
        return axios.put(ProductPath.updateProduct + id,product)
    }
}

export const productService = new ProductService()