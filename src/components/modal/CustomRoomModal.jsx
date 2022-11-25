import React from 'react';
import styled from 'styled-components';
import ModalOrigin from './ModalOrigin';

const CustomRoomModal = () => {
  return (
    <>
      <ModalOrigin headerName={'방만들기'}>
        <CustomCtn>
          <BoldInfo>Room Custom</BoldInfo>
          <RoomNameCtn>
            <RoomInfoText>room name</RoomInfoText>
            <StyledInput type="text" />
          </RoomNameCtn>
          <PersonnelCtn>
            <RoomInfoText>Personnel</RoomInfoText>
            <StyledInput type="" />
          </PersonnelCtn>
          <HostSelectCtn>
            <div>delegate the host</div>
            <HostSelectBox name="" id="">
              <option value="user2">user2 </option>
              <option value="user3">user3</option>
              <option value="user4">user4</option>
            </HostSelectBox>
          </HostSelectCtn>
          <SubmitButton>complete</SubmitButton>
        </CustomCtn>
      </ModalOrigin>
    </>
  );
};

const CustomCtn = styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;
const RoomNameCtn = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoomInfoText = styled.div`
  width: 100px;
  font-size: 1rem;
  text-align: start;
`;
const PersonnelCtn = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoldInfo = styled.div`
  font-size: 2rem;
`;
const StyledInput = styled.input`
  border: none;
  width: 300px;
  height: 20px;
  border-radius: 10px;
  padding: 10px;
  &:focus {
    outline: none !important;
    border-color: #a8cbe9;
    box-shadow: 0 0 5px #a8cce9;
  }
`;
const HostSelectCtn = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e4eaff;
`;

const HostSelectBox = styled.select`
  border: none;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 20px 0 0 0;
  &:focus {
    outline: none !important;
    border-color: #8c92e3;
    box-shadow: 0 0 5px #c7a8e9;
  }
`;
const SubmitButton = styled.button`
  border: none !important;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f0ffc0;
  transition: all 0.2s;
  &:hover {
    border-color: #6f7a47;
    box-shadow: 0 0 5px #2e4830;
  }
`;

export default CustomRoomModal;
