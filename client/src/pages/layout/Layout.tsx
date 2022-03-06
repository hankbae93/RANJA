import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, ContentWrapper, ComponentWrapper, MapWrapper } from './Layout.elements';
import { Header, Navbar } from '../../components';
import MapContainer from '../../containers/MapContainer';
import RequireAuth from '../required-auth/RequiredAuth';

const Layout = () => {
  return (
    <RequireAuth>
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
    </RequireAuth>
  );
};

export default Layout;
