import React, { useRef, useState } from 'react';
import { signUpBodyState } from '../states';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import mafia from '../assets/img/mafia.jpeg';
import instance from '../lib/api';
import { headerNicknameState } from '../states';
import Layout from '../shared/Layout';
// 유효성  : 닉네임 4자 이상, 비밀번호 영대/소문자/숫자/특수기호 포함 8자 이상
const SignUp = () => {
  // useRef 값 참조
  const nicknameRef = useRef();
  const passwordRef = useRef();
  // 유효성 ui
  const [nickValid, setNickValid] = useState('닉네임을 4자 이상 입력해주세요');
  const [passwordValid, setPasswordValid] = useState(
    '비밀번호는 영대/소문자/숫자/특수기호 포함 8자 이상 입력해주세요',
  );
  const validationNick = e => {
    if (e.target.value.length < 4) {
      setNickValid('닉네임을 4자 이상 입력해주세요');
    } else {
      setNickValid('올바른 닉네임 형식입니다.');
    }
  };
  const validationPsw = e => {
    if (!reg.test(e.target.value)) {
      setPasswordValid(
        '비밀번호는 영대/소문자/숫자/특수기호 포함 8자 이상 입력해주세요',
      );
    } else {
      setPasswordValid('올바른 비밀번호 형식입니다.');
    }
  };

  //서버통신

  // 닉네임 중복검사
  const [checkNick, setCheckNick] = useState(false);
  const [, setHeaderNickname] = useRecoilState(headerNicknameState);
  const confirmNick = async () => {
    const nickname = nicknameRef.current.value;
    await instance
      .post('/user/checkid', { nickname })
      .then(response => {
        // console.log('닉네임 중복검사 response', response);
        const {
          data: { msg, nickname, result },
        } = response;
        if (result === true) {
          alert(`${msg}`);
          setCheckNick(true);
          setHeaderNickname(nickname);
        } else if (result === false) {
          console.log(msg);
        }
      })
      .catch(e => console.log(e));
  };

  // 전송할 signup body

  // validation :  {
  //   nickname : '4 - 12자 이내 , 한/영/숫자 모두 가능 , unique',
  //   password : '영문/숫자/특문 모두 포함, 8 - 20 자 이내'
  // }
  const reg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;

  const postSignUpBody = async e => {
    e.preventDefalt();
    if (!checkNick) {
      alert('닉네임 중복검사를 해주세요');
    } else if (
      !(
        nicknameRef.current.value.length > 4 &&
        nicknameRef.current.value.length < 12
      )
    ) {
      alert('닉네임은 4~12자 이내로 입력해 주세요');
    } else if (!reg.test(passwordRef.current.value)) {
      alert(
        '비밀번호는 대문자 포함 영문이고, 숫자, 특수기호 포함 8자 이상이어야 합니다.',
      );
    } else {
      const signUpBody = {
        nickname: `${nicknameRef.current.value}`,
        password: `${passwordRef.current.value}`,
      };
      //   console.log('회원가입 body', body);

      try {
        const response = await instance.post('/user/signup', signUpBody);
        // const { data: result } = response;
        alert('회원가입에 성공했습니다.');
        window.location.replace('/');
      } catch (error) {
        console.log(error);
        console.log(error.response.data.errorMessage);
        // if (error.status === '1000') {
        //   // 가입불가 '중복된 아이디'
        //   console.log(error);
        // } else if (error.status === '1001') {
        //   // 가입불가 '닉네임 및 패스워드 유효성 검사 미통과'
        //   console.log(error);
        // }
      }
    }
  };

  return (
    <>
      <Layout>
        <SignUpCtn>
          <IdenBoxLeft>
            <div>
              <img src="" />
              <HeaderText>Russian Roulette</HeaderText>
            </div>
            <WelcomeText>
              WIN <br />
              THE <br />
              VICTORY
            </WelcomeText>
          </IdenBoxLeft>
          <IdenBoxRight>
            <SignUpForm>
              <NoticeText>Sign Up</NoticeText>
              <NoticeTextUnder>Let's join this Game</NoticeTextUnder>
              <SignUpInput
                type="text"
                placeholder="write your nickname"
                ref={nicknameRef}
                onChange={validationNick}
              />
              <button onClick={() => confirmNick()}>닉네임 중복검사</button>
              <ValidationText>{nickValid}</ValidationText>
              <SignUpInput
                type="password"
                placeholder="write your password"
                ref={passwordRef}
                onChange={validationPsw}
              />
              <ValidationText>{passwordValid}</ValidationText>
              <Button onClick={e => postSignUpBody(e)}>continue</Button>
            </SignUpForm>
          </IdenBoxRight>
        </SignUpCtn>
      </Layout>
    </>
  );
};
const SignUpCtn = styled.div`
  position: fixed;
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  display: flex;
`;

const IdenBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const IdenBoxLeft = styled(IdenBox)`
  justify-content: space-between;
  background-color: #95b3ff;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background: url(${mafia});
  background-size: cover;
  background-position: -100px;
`;

const IdenBoxRight = styled(IdenBox)`
  justify-content: center;
  align-items: center;
  background-color: #1f0400;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const HeaderText = styled.div`
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
`;
const WelcomeText = styled.div`
  color: white;
  font-size: 2rem;
  padding: 20px;
`;

const NoticeText = styled.div`
  font-size: 3rem;
  font-weight: 600;
  margin: 10px 0;
  color: white;
`;

const NoticeTextUnder = styled.div`
  font-size: 1rem;
  color: white;
`;

const SignUpInput = styled.input`
  border: none;
  margin: 20px 0 0 0;
  width: 220px;
  height: 40px;
  border-radius: 7px;
  padding: 2px 10px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #0d0000 0%,
    #820000 51%,
    #750000 100%
  );
  margin: 20px;
  padding: 15px 45px;
  width: 240px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  border: none;
  color: white;
  box-shadow: 0 2px 10px #eee;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

const ValidationText = styled.div`
  color: white;
  font-size: 16px;
  margin: 10px 0 0 0;
`;

export default SignUp;
