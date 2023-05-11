import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #6b5d5d81;
  text-decoration: none;
  font-size: 24px;

  &.active {
    color: darkblue;
    font-weight: 500;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: darkblue;
    font-weight: 500;
  }
`;
