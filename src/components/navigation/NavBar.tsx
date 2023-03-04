import React from "react";
import styled from "@emotion/styled";

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

const NavBar = () => (
  <Navbar>
    <PageTitle>Music</PageTitle>
    <div>
      <Input placeholder="Search"></Input>
      <Search>Search</Search>
    </div>
  </Navbar>
);

export default NavBar;