import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: yellow;
`;

const Layout = () => {
  return (
    <>
      <header>
        <ul className={css.navList}>
          <li>
            <StyledNavLink className={css.navLink} to="/">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink className={css.navLink} to="/movies">
              Movies
            </StyledNavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
