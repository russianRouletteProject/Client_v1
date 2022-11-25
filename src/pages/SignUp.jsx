import React, { useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import mafia from '../assets/img/mafia.jpeg';
import instance from '../lib/api';
import { headerNicknameState } from '../states';
import Layout from '../shared/Layout';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

// 유효성  : 닉네임 4자 이상, 비밀번호 영대/소문자/숫자/특수기호 포함 8자 이상
const SignUp = () => {
  // useRef 값 참조
  const nicknameRef = useRef();
  const passwordRef = useRef();
  // 유효성 ui
  const [nickValid, setNickValid] = useState(
    '닉네임은 4자 이상 12자 이하로 입력해주세요',
  );
  const [passwordValid, setPasswordValid] = useState(
    '비밀번호는 영대/소문자/숫자/특수기호 포함 8자 이상 입력해주세요',
  );
  const [passwordValue, setPasswordValue] = useState(null);
  const [rePasswordValue, setRePasswordValue] = useState('');
  const [rePasswordValid, setRePasswordValid] =
    useState('비밀번호가 일치하지 않습니다.');
  const validationNick = e => {
    if (!(e.target.value.length >= 4 && e.target.value.length <= 12)) {
      setNickValid('닉네임은 4자 이상 12자 이하로 입력해주세요');
    } else {
      setNickValid('올바른 닉네임 형식입니다.');
    }
  };
  const validationPsw = e => {
    setPasswordValue(e.target.value);
    if (!reg.test(e.target.value)) {
      setPasswordValid(
        '비밀번호는 영대/소문자/숫자/특수기호 포함 8자 이상 입력해주세요',
      );
    } else {
      setPasswordValid('올바른 비밀번호 형식입니다.');
    }
  };

  //왜 한개씩 밀려서 입력되는거지?!
  const checkReWritePsw = e => {
    setRePasswordValue(e.target.value);
    console.log(rePasswordValue, passwordValue);
    if (rePasswordValue === passwordValue) {
      setRePasswordValid('비밀번호가 일치합니다.');
    } else {
      setRePasswordValid('비밀번호가 일치하지 않습니다.');
    }
  };

  // 닉네임 중복검사
  const navigate = useNavigate();
  const [checkNick, setCheckNick] = useState(false);
  const setHeaderNickname = useSetRecoilState(headerNicknameState);

  const nicknameMutation = useMutation(
    nickname => {
      const res = instance.post('/user/checkid', { nickname });
      return res;
    },
    {
      onSuccess: res => {
        const {
          data: { msg, nickname, result },
        } = res;
        setCheckNick(result);
        setHeaderNickname(nickname);
        if (msg) {
          alert('사용가능한 닉네임입니다.');
        }
      },
      onError: e => console.log(e),
    },
  );

  const fetchNick = () => {
    if (
      !(
        nicknameRef.current.value.length >= 4 &&
        nicknameRef.current.value.length <= 12
      )
    ) {
      alert('닉네임은 4자 이상 12자 이하로 작성해주세요');
    } else {
      const nickname = nicknameRef.current.value;
      nicknameMutation.mutate(nickname);
    }
  };
  // 회원가입
  const reg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;
  const signUpMutation = useMutation(
    async signUpBody => {
      const res = await instance.post('/user/signup', signUpBody);
      return res;
    },
    {
      onSuccess: res => {
        console.log(res.data);

        // navigate('/');
      },
      onError: error => {
        console.log(error);
      },
      onSettled: () => {
        console.log('onSettled');
      },
    },
  );

  const onClickSignUpBody = () => {
    if (!checkNick) {
      alert('닉네임 중복검사를 해주세요');
    } else if (
      !(
        nicknameRef.current.value.length >= 4 &&
        nicknameRef.current.value.length <= 12
      )
    ) {
      alert('닉네임은 4~12자 이내로 입력해 주세요');
    } else if (!reg.test(passwordRef.current.value)) {
      alert(
        '비밀번호는 대문자 포함 영문이고, 숫자, 특수기호 포함 8자 이상이어야 합니다.',
      );
    } else {
      const signUpBody = {
        nickname: nicknameRef.current.value,
        password: passwordRef.current.value,
      };
      signUpMutation.mutate(signUpBody);
    }
  };
  // 전송할 signup body

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
              <button onClick={() => fetchNick()}>닉네임 중복검사</button>
              <ValidationText>{nickValid}</ValidationText>
              <SignUpInput
                type="password"
                placeholder="write your password"
                ref={passwordRef}
                onChange={validationPsw}
              />
              <ValidationText>{passwordValid}</ValidationText>
              <SignUpInput
                type="password"
                placeholder="write your password own more"
                onChange={checkReWritePsw}
              />
              <ValidationText>{rePasswordValid}</ValidationText>
              <Button onClick={() => onClickSignUpBody()}>continue</Button>
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

const SignUpForm = styled.div`
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
