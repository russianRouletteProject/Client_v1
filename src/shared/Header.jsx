import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isMainState, isListState } from '../states';
const Header = () => {
  const [isMain, setIsMain] = useRecoilState(isMainState);
  const [isList, setIsList] = useRecoilState(isListState);
  return (
    <>
      <HeaderBox>
        <HeaderLogo>
          <img
            src="https://cdn-icons-png.flaticon.com/512/48/48826.png"
            width="50px"
          />
          <div>Russian Roulette</div>
        </HeaderLogo>
        <HeaderNav>
          {isMain && <NavButton>custom room</NavButton>}
          {isList && <NavButton>create room</NavButton>}
        </HeaderNav>
        <HeaderProfile>
          <div>profile</div>
        </HeaderProfile>
      </HeaderBox>
    </>
  );
};

const HeaderBox = styled.header`
  max-width: 1200px;
  width: 95%;
  display: flex;
  align-items: center;
  background-color: #0c0d12;
  border-radius: 10px;
  padding: 4px 0;
  margin: 0 auto;
`;

const HeaderLogo = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  color: white;
  margin-left: 40px;
  & * {
    margin-right: 10px;
  }
`;

const HeaderNav = styled.nav`
  font-size: 10px;
  display: flex;
  flex: 1;
  color: #606a7f;
  & * {
    margin-right: 25px;
  }
`;

const HeaderProfile = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  color: white;
  margin-right: 30px;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #707070;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 0.8rem #fff);
  }
`;
export default Header;
