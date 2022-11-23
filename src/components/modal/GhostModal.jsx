import React from 'react';
import ModalOrigin from './ModalOrigin';
import styled from 'styled-components';
import { FiMessageCircle } from 'react-icons/fi';
const GhostModal = () => {
  return (
    <>
      <ModalOrigin headerName={'Ghost Chatting'}>
        <GhostCtn>
          <BoldInfo>Ghost Chatting</BoldInfo>
          <ChatRoomLayout>
            <UserBox>
              <ChattingUserName>user1</ChattingUserName>
              <ChattingBox>hi im ghost</ChattingBox>
            </UserBox>
            <UserBoxLeft>
              <ChattingUserName>user1</ChattingUserName>
              <ChattingBox>hi im ghost</ChattingBox>
            </UserBoxLeft>
            <InputArea>
              <ChatInput type="text" />
              <div>
                <ChatSubmitButton>
                  <FiMessageCircle
                    style={{
                      transform: 'scale(1.5)',
                      color: '#d0d0d0',
                      marginLeft: '10px',
                    }}
                  />
                </ChatSubmitButton>
              </div>
            </InputArea>
          </ChatRoomLayout>
        </GhostCtn>
      </ModalOrigin>
    </>
  );
};
const GhostCtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const BoldInfo = styled.div`
  font-size: 2rem;
`;
const ChatRoomLayout = styled.div`
  width: 400px;
  height: 400px;
  margin: auto 0;
  background-color: aliceblue;
  border-radius: 10px;
  position: relative;
`;
const UserBox = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const ChattingUserName = styled.div`
  top: 8px;
  right: 13px;
  padding-bottom: 5px;
`;
const ChattingBox = styled.div`
  background-color: aquamarine;
  border-radius: 10px;
  padding: 10px 20px;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UserBoxLeft = styled(UserBox)`
  align-items: flex-start;
`;

const InputArea = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 330px;
`;

const ChatInput = styled.input`
  width: 350px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  border: 2px solid #eaeaea;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none !important;
    border-color: #a8ace9;
    box-shadow: 0 0 5px #c7a8e9;
  }
`;
const ChatSubmitButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  left: 335px;
  bottom: 25px;
  background-color: transparent;
`;
export default GhostModal;
