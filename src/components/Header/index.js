import React from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <MDBNavbar expand='lg' light bgColor='white' fixed>
      <MDBContainer >
        <MDBNavbarToggler
          aria-controls='navbarExample01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <div className='collapse navbar-collapse' id='navbarExample01'>
          <MDBNavbarNav right className='mb-2 mb-lg-0 align-items-center'>
            <MDBNavbarItem active >
              <NavLink to='/' className='nav-link'>
                <h3 className="text-danger" >TH MOBILE</h3>
              </NavLink>
            </MDBNavbarItem>
            <div className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
              <MDBNavbarItem >
                <NavLink to='/' className="nav-link" style={{fontSize:'18px'}}>Trang chủ</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to='/contact' className="nav-link" style={{fontSize:'18px'}}>Liên hệ</NavLink>
              </MDBNavbarItem>
            </div>
            <NavLink to='/productManager' className='btn btn-primary' size='large'>
              Quản lý sản phẩm
            </NavLink>
          </MDBNavbarNav>
        </div>
      </MDBContainer>
    </MDBNavbar>

  )
}
