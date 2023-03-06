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

const Search= styled.button`
  padding: 8px 24px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: lightskyblue;
  border: none;
`

const Input = styled.input`
  height:30px;
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