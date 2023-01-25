import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.header`
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  margin-right: 10px;
  font-weight: 700;
  &.active {
    color: red;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
