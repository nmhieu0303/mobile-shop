import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { domain } from '../../utils/urlPath';

export default function ProductItem({product}) {
    return (
        <MDBCard  className='w-100 my-3'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={domain+product?.imagesProduct[0]} className='w-100' style={{objectContent:'cover'}} alt='...' />
                <Link to={`/productDetail/${product?.id}`}>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </Link>
            </MDBRipple>
            <MDBCardBody>
                <h6 className="font-weight-bold " style={{whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis'}}>{product?.name}</h6>
                    <div className="d-flex justify-content-between ">
                        <small className="text-danger font-weight-bold"> {product?.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</small>
                        <small><del>{(product?.price+500000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</del></small>
                    </div>
                   
                    <Link to={`/productDetail/${product?.id}`} className="btn btn-block btn-primary mt-3">Xem chi tiết</Link>
            </MDBCardBody>
        </MDBCard>
    )
}
