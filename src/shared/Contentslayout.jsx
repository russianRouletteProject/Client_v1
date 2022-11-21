import React from 'react';
import styled from 'styled-components';
import mafia from '../assets/img/mafia.jpeg';

const Contentslayout = ({ children }) => {
  return <LayoutBox>{children}</LayoutBox>;
};

const LayoutBox = styled.div`
  max-width: 1200px;
  width: 95%;
  height: 700px;
  border-radius: 10px;
  margin: 0 auto;
  //background image 파일경로 지정법
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${mafia});
  background-size: cover;
`;
export default Contentslayout;
