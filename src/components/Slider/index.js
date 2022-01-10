import React from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';

  
export default function Slider() {
    return (
        <MDBCarousel showIndicators showControls fade dark>
      <MDBCarouselInner>
      

        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/ip12den-tet-690-300-max.png' alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/DELL_Vostro-3500_690x300.png' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/MLKK_VSMART_690x300.png' alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem >
          <MDBCarouselElement src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/s21-fe-690x300_25_.png' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    )
}
