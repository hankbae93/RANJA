import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadMyInfo as loadMyInfoSagaStart } from '../../redux/modules/auth';

import { Wrapper, ContentWrapper, ComponentWrapper, MapWrapper } from './Layout.elements';
import { Header, Navbar, Map, RequiredAuth } from '../../components';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyInfoSagaStart());
  }, []);

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
