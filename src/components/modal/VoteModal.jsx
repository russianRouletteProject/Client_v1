import React, { useState } from 'react';
import ModalOrigin from './ModalOrigin';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import VoteUser from './VoteUser';
import { voteUserState } from '../../states';
import { useRecoilState } from 'recoil';

const VoteModal = ({ mainQues, subQues }) => {
  const [users, setUsers] = useRecoilState(voteUserState);
  const navigate = useNavigate();
  const voteSubmitHandler = () => {};
  return (
    <>
      <ModalOrigin headerName={'mafia kill vote'}>
        <VoteWrap>
          <VoteText>
            <BoldInfo>
              {mainQues ? mainQues : 'who do you want to kill'}
            </BoldInfo>
            <DescInfo>{subQues ? subQues : 'Choose who to kill'}</DescInfo>
            <Timer>2 : 59</Timer>
          </VoteText>
          {users.map((user, idx) => (
            <VoteUser userName={user.userName} idx={idx} key={user.userName} />
          ))}
          <ButtonBlank>
            <DecideButton
              onClick={e => {
                e.preventDefault();
                voteSubmitHandler();
              }}>
              결정 !
            </DecideButton>
          </ButtonBlank>
        </VoteWrap>
      </ModalOrigin>
    </>
  );
};

const VoteWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const VoteText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;
const BoldInfo = styled.div`
  font-size: 2rem;
`;
const DescInfo = styled.div`
  font-size: 1.6rem;
`;
const Timer = styled.div``;

const ButtonBlank = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;
const DecideButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  border-color: transparent;
  border: 1px solid transparent;
  transition: all 0.2s;
  &:hover {
    border: 3px solid #c7c7c7;
    background-color: transparent;
  }
`;

export default VoteModal;
