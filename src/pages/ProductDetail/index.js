import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import { productService } from '../../services/ProductService';
import { domain } from '../../utils/urlPath';

export default function ProductDetail() {
    const { idProduct } = useParams();
    const [product, setProduct] = useState(null)

    const getProductDetail = async () => {
        try {
            const { data, status } = await productService.getProductDetail(idProduct);
            if (status === 200) {
                setProduct(data)
            }
        } catch (err) {
            console.error()
        }
    }

    useEffect(() => {
        getProductDetail()

    }, [])

    return (
        <div className="container py-5">
            {/* title */}
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                    <h1>{product?.name}</h1>
                </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
                <div className="col-8 mx-auto col-md-4 my-3">
                    <MDBCarousel showIndicators showControls dark>
                        <MDBCarouselInner>
                            {product?.imagesProduct.map((img,index) => {
                                return <MDBCarouselItem key={index} className={index===0? 'active':''}>
                                    <MDBCarouselElement src={domain + img} alt='...' />
                                </MDBCarouselItem>
                            })}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 mb-5 text-capitalize">

                    <h3 className="text-blue">
                        <strong>Giá: <span className="text-danger">{product?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></strong>
                    </h3>
                    <h6 className="text-title text-uppercase text-muted mt-3 mb-2 fw-bold">
                        Nhà sản xuất: <span className="text-uppercase">{product?.category}</span>
                    </h6>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Mô tả:
                    </p>
                    <p className="text-muted lead">
                        {product?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
