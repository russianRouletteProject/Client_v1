import React from 'react';
import styled from 'styled-components';
import ModalOrigin from './ModalOrigin';
import laugh from '../../assets/img/smile.png';
const ExtraPersonModal = () => {
  return (
    <>
      <ModalOrigin>
        <ExtraCtn>
          <BoldInfo>Actually user2 was a citizen</BoldInfo>
          <ExtraImg src={laugh} />
          <LeftText>left</LeftText>
          <LeftCountText>mafia : 2, citizen : 2</LeftCountText>
        </ExtraCtn>
      </ModalOrigin>
    </>
  );
};

const ExtraCtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const BoldInfo = styled.div`
  font-size: 2rem;
`;
const ExtraImg = styled.img`
  width: 250px;
`;
const LeftText = styled.div`
  font-size: 1.5rem;
`;
const LeftCountText = styled.div`
  font-size: 1.25rem;
`;
export default ExtraPersonModal;
