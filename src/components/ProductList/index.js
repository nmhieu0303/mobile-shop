import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ProductItem from '../ProductItem';


export default function ProductList(props) {
    return (
        <MDBRow>
            {props.produtList?.map(product => {
                return <MDBCol key={product?.id}  size='12' sm='6' md='4' lg="3"  >
                    <ProductItem product={product}/>
                </MDBCol>
            })}

        </MDBRow>
    )
}
