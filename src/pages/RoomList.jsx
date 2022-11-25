import React from 'react';
import instance from '../lib/api';
import { roomListState } from '../states';
import { useRecoilState } from 'recoil';
import Header from '../shared/Header';
import Contentslayout from '../shared/Contentslayout';
import Layout from '../shared/Layout';
import styled from 'styled-components';
import { useQuery } from 'react-query';
const RoomList = () => {
  const { data, status, error } = useQuery(['roomlist'], async () => {
    await instance.get();
  });

  if (status === 'loading') {
    console.log('is Loading');
  }

  if (status === 'error') {
    console.log(error.message);
  }
  const [roomlist, setRoomList] = useRecoilState(roomListState);

  return (
    <>
      <Layout>
        <RoomListCtn>
          <Header />
          <Contentslayout>
            <RoomListWrap>
              <RoomListBox>
                <RoomBox>
                  <RoomBoxContents>
                    <RoomInfo>
                      <div>방번호: 1</div>
                      <div>마피아 클래식 방입니다</div>
                    </RoomInfo>
                    <Personnel>Icon</Personnel>
                  </RoomBoxContents>
                </RoomBox>
                <RoomBox>
                  <RoomBoxContents>
                    <RoomInfo>
                      <div>방번호: 1</div>
                      <div>마피아 클래식 방입니다</div>
                    </RoomInfo>
                    <Personnel>Icon</Personnel>
                  </RoomBoxContents>
                </RoomBox>
                <RoomBox>
                  <RoomBoxContents>
                    <RoomInfo>
                      <div>방번호: 1</div>
                      <div>마피아 클래식 방입니다</div>
                    </RoomInfo>
                    <Personnel>Icon</Personnel>
                  </RoomBoxContents>
                </RoomBox>
                <RoomBox>
                  <RoomBoxContents>
                    <RoomInfo>
                      <div>방번호: 1</div>
                      <div>마피아 클래식 방입니다</div>
                    </RoomInfo>
                    <Personnel>Icon</Personnel>
                  </RoomBoxContents>
                </RoomBox>
                <RoomBox>
                  <RoomBoxContents>
                    <RoomInfo>
                      <div>방번호: 1</div>
                      <div>마피아 클래식 방입니다</div>
                    </RoomInfo>
                    <Personnel>Icon</Personnel>
                  </RoomBoxContents>
                </RoomBox>
              </RoomListBox>
            </RoomListWrap>
            {/* {roomlist.map(room => {
                <div
                // onClick={#}
                >
                  <div>room.title</div>
                </div>;
              })} */}
          </Contentslayout>
        </RoomListCtn>
      </Layout>
    </>
  );
};

const RoomListCtn = styled.div`
  position: fixed;
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const RoomListWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RoomListBox = styled.div`
  width: 900px;
  height: 600px;
  padding: 20px;
  border: 1px solid #828282;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* justify-content: center; */
`;
const RoomBox = styled.div`
  border: 1px solid #969696;
  border-radius: 10px;
  margin: 10px;
  width: 500px;
  height: 100px;
  cursor: pointer;
`;

const RoomBoxContents = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Personnel = styled.div`
  display: flex;
  align-items: center;
`;
export default RoomList;
