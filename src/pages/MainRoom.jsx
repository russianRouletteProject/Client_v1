import React, { useEffect } from 'react';
import Header from '../shared/Header';
import Contentslayout from '../shared/Contentslayout';
import { useRecoilState } from 'recoil';
import { isMainState } from '../states';
import styled from 'styled-components';
import Layout from '../shared/Layout';
const MainRoom = () => {
  const [isMain, setIsMain] = useRecoilState(isMainState);
  useEffect(() => {
    setIsMain(true);
  }, []);
  // 서버
  return (
    <>
      <Layout>
        <Header />
        <Contentslayout>
          <Wrap>
            <UserWrap>
              <UserBox></UserBox>
              <UserBox></UserBox>
              <UserBox></UserBox>
              <UserBox></UserBox>
            </UserWrap>
          </Wrap>
        </Contentslayout>
      </Layout>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const UserWrap = styled.div`
  background-color: white;
  width: 900px;
  height: 600px;
  padding: 10px auto;
  display: grid;
`;

const UserBox = styled.div`
  background-color: pink;
  border: 1px solid gray;
  grid-template-columns: 1fr;
`;

export default MainRoom;
