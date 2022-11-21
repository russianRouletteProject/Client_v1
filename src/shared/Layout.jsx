import React from 'react';
import styled from 'styled-components';

const Layout = ({ children, background }) => {
  return <LayoutCtn background={background}>{children}</LayoutCtn>;
};

export const LayoutCtn = styled.div`
  background-color: ${props => (props.background ? props.background : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1080px;
`;

export default Layout;
