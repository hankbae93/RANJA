import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, ContentWrapper, ComponentWrapper, MapWrapper } from './Layout.elements';
import { Header, Navbar, Map, RequiredAuth } from '../../components';

const Layout = () => {
  return (
    <RequiredAuth>
      <Wrapper>
        <ComponentWrapper>
          <Header />

          <ContentWrapper>
            <Navbar />
            <Outlet />
          </ContentWrapper>
        </ComponentWrapper>

        <MapWrapper>
          <Map />
        </MapWrapper>
      </Wrapper>
    </RequiredAuth>
  );
};

export default Layout;
