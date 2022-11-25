import React, { useState } from 'react';
import ModalOrigin from './ModalOrigin';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import checkImg from '../../assets/img/check.png';
const VoteModal = ({ mainQues, subQues }) => {
  const navigate = useNavigate();
  const [isSelect, setIsSelect] = useState(false);
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
          <Options>
            <Option htmlFor="option" id="option-label">
              <div>user1</div>
              {/* label을 붙여놔서 체크하면 ture or false를 반환하게 까지 만들어둠 */}
              {/* 하지만 체크 여부에 따라 스타일 주는게 안되는중 */}
              <CheckInput
                type="checkbox"
                id="option"
                onChange={e => {
                  console.log(e.target.checked);
                }}
              />
              <CheckImg src={checkImg} />
            </Option>
            <Option htmlFor="option" id="option-label">
              <div>user1</div>
              {/* label을 붙여놔서 체크하면 ture or false를 반환하게 까지 만들어둠 */}
              {/* 하지만 체크 여부에 따라 스타일 주는게 안되는중 */}
              <CheckInput
                type="checkbox"
                id="option"
                onChange={e => {
                  console.log(e.target.checked);
                }}
              />
              <CheckImg src={checkImg} />
            </Option>
            <Option htmlFor="option" id="option-label">
              <div>user1</div>
              {/* label을 붙여놔서 체크하면 ture or false를 반환하게 까지 만들어둠 */}
              {/* 하지만 체크 여부에 따라 스타일 주는게 안되는중 */}
              <CheckInput
                type="checkbox"
                id="option"
                onChange={e => {
                  console.log(e.target.checked);
                }}
              />
              <CheckImg src={checkImg} />
            </Option>

            <Option htmlFor="option" id="option-label">
              <div>user1</div>
              {/* label을 붙여놔서 체크하면 ture or false를 반환하게 까지 만들어둠 */}
              {/* 하지만 체크 여부에 따라 스타일 주는게 안되는중 */}
              <CheckInput
                type="checkbox"
                id="option"
                onChange={e => {
                  console.log(e.target.checked);
                }}
              />
              <CheckImg src={checkImg} />
            </Option>

            <ButtonBlank>
              <DecideButton
                onClick={e => {
                  e.preventDefault();
                  voteSubmitHandler();
                }}>
                결정 !
              </DecideButton>
            </ButtonBlank>
          </Options>
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

const Options = styled.form`
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
  &:checked + #option-label {
    border: 2px solid gray;
  }
`;

const CheckInput = styled.input`
  display: none;
`;
const CheckImg = styled.img`
  width: 35px;
  position: absolute;
  left: 360px;
`;
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
