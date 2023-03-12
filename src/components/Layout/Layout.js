import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Container, HeaderNav, HeaderNavLink } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderNav>
            <HeaderNavLink to="/">Home</HeaderNavLink>
            <HeaderNavLink to="/movies">Movies</HeaderNavLink>
          </HeaderNav>
        </Container>
      </Header>

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default Layout;
