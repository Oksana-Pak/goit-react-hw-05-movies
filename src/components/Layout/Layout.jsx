import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavItem } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Nav>
        <nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
