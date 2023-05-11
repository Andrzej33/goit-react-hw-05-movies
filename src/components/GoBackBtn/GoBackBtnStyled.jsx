import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoBackBtn = styled(Link)`
width: 130px;
text-decoration: none;
font-family: Lato;
font-weight: 200;
font-size: 14px;
color: #e9c46a;
background-color: #5b7794;
padding: 10px 30px;
border: solid #0096c7b5 2px;
box-shadow: none;
border-radius: 50px 17px 17px 50px;
transition : 603ms;
transform: translateY(0);
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
text-transform: uppercase;


&:hover{

transition : 603ms;
/* padding: 10px 34px; */
transform : translateY(-0px);
background-color: #fff;
color: #0066cc;
border: solid 2px #0066cc;
}

  
`