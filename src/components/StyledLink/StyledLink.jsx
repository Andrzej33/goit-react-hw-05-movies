import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: 24px;
/* &:hover{
  color: orange;
} */
&.active {
    color: darkblue;
    font-weight: 500;
    
  }  

`

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
&:hover{
  color: darkblue;
}
/* &.active {
    color: darkblue;
  }   */

`