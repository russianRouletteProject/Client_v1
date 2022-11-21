import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../shared/Layout';
import { useRecoilState } from 'recoil';
import { modalIsOpenState } from '../states';
const Modal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpenState);
  const modalOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalCtn>
        <ModalButton onClick={() => modalOpenHandler()}>
          {isOpen ? 'Modal' : 'unModal'}
        </ModalButton>
        {isOpen ? (
          <ModalBack onClick={() => modalOpenHandler()}>
            <ModalView></ModalView>
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
  background: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  animation: modal-show 0.3s;

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: 50px;
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

const ModalButton = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;
export default Modal;
