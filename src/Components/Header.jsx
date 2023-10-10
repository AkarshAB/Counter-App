import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-danger'>
            <img
              src='https://cdn.pixabay.com/animation/2022/09/24/02/37/02-37-04-457_512.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header