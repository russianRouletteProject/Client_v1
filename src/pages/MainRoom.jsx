import React, { useEffect, useState } from 'react';
import Header from '../shared/Header';
import Contentslayout from '../shared/Contentslayout';
import { useRecoilState } from 'recoil';
import { isMainState } from '../states';
import styled from 'styled-components';
import Layout from '../shared/Layout';
const MainRoom = () => {
  const [isHost, setIsHost] = useState(true);
  const [isGhost, setIsGhost] = useState(true);
  const [, setIsMain] = useRecoilState(isMainState);
  useEffect(() => {
    setIsMain(true);
  }, []);
  // 서버
  return (
    <>
      <Layout>
        <MainRoomCtn>
          <Header />
          <Contentslayout>
            <Wrap>
              <RoomInfo>room number</RoomInfo>
              <UserCtn>
                <UserBox>
                  {/* {isHost && <span>King Icon</span>} */}
                  <UserName>userName</UserName>
                </UserBox>
                <UserBox>
                  <UserName>userName</UserName>
                </UserBox>
                <UserBox>
                  <UserName>userName</UserName>
                </UserBox>
                <UserBox>
                  <UserName>userName</UserName>
                </UserBox>
                <UserBox>
                  <UserName>userName</UserName>
                </UserBox>
                <UserBox>
                  <UserName>userName</UserName>
                </UserBox>
              </UserCtn>
              <ButtonCtn>
                {isHost && <StartButton>Game Start</StartButton>}
                {isGhost && (
                  <ChattingModalButton>
                    <Svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1280.000000 1044.000000"
                      preserveAspectRatio="xMidYMid meet">
                      <metadata>
                        Created by potrace 1.15, written by Peter Selinger
                        2001-2017
                      </metadata>
                      <g
                        transform="translate(0.000000,1044.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path
                          d="M1603 10429 c-842 -98 -1500 -759 -1592 -1601 -15 -130 -15 -2059 -1
-2183 50 -429 233 -802 542 -1100 136 -132 262 -223 420 -305 l118 -61 2 -971
3 -972 800 894 800 893 6 1016 c6 1085 6 1089 59 1366 93 481 337 969 674
1347 166 187 348 344 565 489 298 199 657 349 1004 420 263 53 234 52 1416 58
l1104 6 -51 61 c-301 362 -728 592 -1194 643 -118 13 -4564 13 -4675 0z"
                        />
                        <path
                          d="M5280 8974 c-592 -80 -1127 -403 -1475 -889 -182 -255 -318 -576
-369 -875 -35 -202 -37 -326 -33 -1730 4 -1528 0 -1445 68 -1707 196 -764 800
-1365 1564 -1558 271 -68 153 -65 2464 -65 l2086 0 944 -1068 c519 -587 948
-1068 952 -1070 5 -2 9 515 9 1155 l0 1159 70 31 c38 17 117 59 175 94 563
335 939 892 1042 1543 17 102 18 226 18 1576 0 1364 -1 1473 -18 1579 -153
967 -903 1699 -1871 1826 -103 13 -441 15 -2819 14 -2273 -1 -2719 -3 -2807
-15z"
                        />
                      </g>
                    </Svg>
                  </ChattingModalButton>
                )}
              </ButtonCtn>
            </Wrap>
          </Contentslayout>
        </MainRoomCtn>
      </Layout>
    </>
  );
};

const MainRoomCtn = styled.div`
  position: fixed;
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  height: 100%;
`;

const RoomInfo = styled.div`
  width: 900px;
  text-align: start;
  color: #fff;
  margin-top: 30px;
`;
const UserCtn = styled.div`
  background-color: white;
  width: 900px;
  height: 550px;
  padding: 20px;
  background-color: transparent;
  display: grid;
  //열(column) 3개를 사용하고 각 1fraction으로 나눠가진다.
  grid-template-columns: repeat(3, 1fr);

  // min max 함수도 사용 가능하다 : 최소한 100px, 최대는 자동으로 늘어나게(auto)
  /* grid-template-rows: repeat(3, minmax(100px, auto)); */
  gap: 20px;
`;

const UserBox = styled.div`
  background-color: #94e6ff;
  border-radius: 10px;
  border: 1px solid gray;
  position: relative;
`;

const UserName = styled.span`
  position: absolute;
  top: 220px;
  left: 10px;
`;

const ButtonCtn = styled.div`
  margin-bottom: 25px;
`;
const StartButton = styled.button`
  font-size: 1.3rem;
  color: white;
  padding: 15px 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.2rem #fff);
  }
`;

const ChattingModalButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 1350px;
  bottom: 140px;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const Svg = styled.svg`
  width: 60px;
  fill: white;
`;

export default MainRoom;
