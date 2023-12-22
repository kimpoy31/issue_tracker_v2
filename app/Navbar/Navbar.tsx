import {Container, Flex} from '@radix-ui/themes'
import React from 'react'
import NavActionBtn from './NavActionBtn';
import NavbarLinks from './NavLinks';

const Navbar = () => {
  

  return (
    <Container px={{initial:"1", md:"6"}} py={"4"}>
      <Flex justify={"between"} align={"center"} >
        <NavbarLinks></NavbarLinks>
        <NavActionBtn />
      </Flex>
    </Container>
  )
}

export default Navbar