import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { modalIsOpenState } from '../../states';
import { HiX } from 'react-icons/hi';
const ModalOrigin = ({ children, headerName }) => {
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpenState);
  const modalOpenHandler = () => {
    // setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalCtn>
        <ModalButton onClick={() => modalOpenHandler()}>
          {isOpen ? 'Modal' : 'unModal'}
        </ModalButton>
        {isOpen ? (
          <ModalBack onClick={() => modalOpenHandler()}>
            <ModalView>
              <ModalHeader>
                <FlexDummy>
                  <IconBack>
                    <HiX style={{ width: '50px' }} />
                  </IconBack>
                </FlexDummy>
                <ModalHeaderTitle>{headerName}</ModalHeaderTitle>
                <FlexDummy />
              </ModalHeader>
              <ModalContentsLay>{children}</ModalContentsLay>
            </ModalView>
          </ModalBack>
        ) : null}
      </ModalCtn>
    </>
  );
};
const ModalCtn = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

const ModalBack = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalView = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  animation: modal-show 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: 100px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  @keyframes modal-down {
    from {
      opacity: 1;
      margin-top: 0;
    }
    to {
      opacity: 0;
      margin-top: 50px;
    }
  }
`;
const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
`;
const IconBack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  flex: 1;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
    animation: spin 0.9s ease-in-out infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;
const ModalHeaderTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexDummy = styled.div`
  flex: 1;
`;
const ModalContentsLay = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const ModalButton = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;
export default ModalOrigin;
