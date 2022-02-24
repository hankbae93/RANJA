import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, ContentWrapper, ComponentWrapper, MapWrapper } from './Layout.elements';
import { Header, Navbar, RequiredAuth } from '../../components';
import MapContainer from '../../containers/MapContainer';

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
          <MapContainer />
        </MapWrapper>
      </Wrapper>
    </RequiredAuth>
  );
};

export default Layout;
