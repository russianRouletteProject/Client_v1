import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import checkImg from '../../assets/img/check.png';
import { voteUserState } from '../../states';

const VoteUser = ({ userName, idx }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [users, setUsers] = useRecoilState(voteUserState);

  return (
    <>
      <Options
        onClick={() => {
          if (users.every(item => item.isSelect === false)) {
            console.log('바꿔라 값');
          } else {
            console.log('결과가 false');
          }
        }}>
        <Option htmlFor="option" id="option-label" isSelect={isSelect}>
          <div>{userName}</div>
          {isSelect ? <CheckImg src={checkImg} /> : null}
        </Option>
      </Options>
    </>
  );
};

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 90%;
  position: relative;
`;

const Option = styled.label`
  width: 95%;
  height: 50px;
  background-color: #dbeeff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;
  border: ${props => (props.isSelect ? '5px solid gray' : null)};
`;

const CheckInput = styled.input`
  display: none;
`;

const CheckImg = styled.img`
  width: 35px;
  position: absolute;
  left: 360px;
`;

export default VoteUser;
