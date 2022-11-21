import React from 'react';
import instance from '../lib/api';
import { roomListState } from '../states';
import { useRecoilState } from 'recoil';
import Header from '../shared/Header';
import Contentslayout from '../shared/Contentslayout';
import Layout from '../shared/Layout';
import styled from 'styled-components';
const RoomList = () => {
  const [roomlist, setRoomList] = useRecoilState(roomListState);
  const getRoomList = async () => {
    try {
      const response = await instance.get();
      console.log('방 목록 조회', response);
      setRoomList(response.data);
    } catch (error) {}
  };
  return (
    <>
      <Layout>
        <RoomListCtn>
          <Header />
          <Contentslayout>
            <div>
              {roomlist.map(room => {
                <div
                // onClick={#}
                >
                  <div>room.title</div>
                  <div>room.title</div>
                  <div>room.title</div>
                </div>;
              })}
            </div>
          </Contentslayout>
        </RoomListCtn>
      </Layout>
    </>
  );
};

const RoomListCtn = styled.div`
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export default RoomList;
