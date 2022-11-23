import React, { useState } from 'react';
import ModalOrigin from './ModalOrigin';
import styled from 'styled-components';
import mafiaImg from '../../assets/img/hat.png';
const RoleModal = () => {
  const [role, setRole] = useState('');
  return (
    <>
      <ModalOrigin headerName={'내 직업!'}>
        <RoleWrap>
          <RoleInfo>Your Role Is</RoleInfo>
          <RoleName>Mafia!</RoleName>
          <RoleImg src={mafiaImg} alt="" />
        </RoleWrap>
      </ModalOrigin>
    </>
  );
};

const RoleWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const RoleInfo = styled.div`
  font-size: 2rem;
`;

const RoleName = styled.div`
  font-size: 2.3rem;
`;

const RoleImg = styled.img`
  width: 300px;
`;

export default RoleModal;
