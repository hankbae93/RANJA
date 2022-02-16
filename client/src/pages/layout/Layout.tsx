import React from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper, ContentWrapper, ComponentWrapper, MapWrapper } from './Layout.elements';
import Header from '../../components/common/header/Header';
import Navbar from '../../components/common/navbar/Navbar';
import Map from '../../components/map';

const Layout = () => {
  return (
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
  );
};

export default Layout;
