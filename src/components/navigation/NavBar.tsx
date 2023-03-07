import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "rebass";

const Navbar=styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  align-items: center;
  background-color: #333;
`

const PageTitle=styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: white;
  letter-spacing: .25px;
`

const NavBar = () => {


  return(
    <Navbar>
      <Link to="/"><PageTitle>Music</PageTitle></Link>
      <div>
        <Link to="/add">
          <Button width={100} backgroundColor={'grey'} marginBottom={'10'}> Add</Button>
        </Link>
      </div>
    </Navbar>
  )
};

export default NavBar;