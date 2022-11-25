import React, { useRef } from 'react';
import styled from 'styled-components';
import mafia from '../assets/img/mafia.jpeg';
import { useNavigate } from 'react-router-dom';
import instance from '../lib/api';
import Layout from '../shared/Layout';
import { useMutation } from 'react-query';
// import { Cookies } from 'react-cookie';
const Login = () => {
  const navigate = useNavigate();
  //useRef 참조
  const nicknameRef = useRef();
  const passwordRef = useRef();
  //쿠키 사용
  // const cookies = new Cookies();
  // const setCookie = (name, value, option) => {
  //   return cookies.set(name, value);
  // };
  // const getCokie = name => {
  //   return cookies.get(name);
  // };
  // post login body
  const loginMutation = useMutation(
    async loginBody => {
      const res = await instance
        .post('/user/login', loginBody)
        .then(res => res.data);

      return res;
    },
    {
      onSuccess: data => {
        const accessToken = data.token.accessToken;
        localStorage.setItem('accessToken', accessToken);

        navigate('/roomlist');
      },
      onError: e => {
        console.log(e);
      },
      onSettled: () => {
        console.log('setteld');
      },
    },
  );
  const loginFetch = () => {
    const loginBody = {
      nickname: nicknameRef.current.value,
      password: passwordRef.current.value,
    };
    loginMutation.mutate(loginBody);
  };
  return (
    <Layout>
      <LoginCtn>
        <WholeBox>
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
            <NoticeText>
              Write
              <br /> Your
              <br /> Nicname
            </NoticeText>
            <NoticeTextUnder>Let's join this Game</NoticeTextUnder>
            <LoginInput
              type="text"
              placeholder="write your nicname"
              ref={nicknameRef}
            />
            <LoginInput
              type="password"
              placeholder="write your password"
              ref={passwordRef}
            />
            <Button onClick={() => loginFetch()}>continue</Button>
            <SignUpText>회원이 아니라면?</SignUpText>
            <ButtonFlex>
              <Button
                width={'100px'}
                padding={0}
                onClick={() => navigate('/roomlist')}>
                둘러보기
              </Button>
              <Button
                width={'100px'}
                padding={0}
                onClick={() => navigate('/signup')}>
                가입하기
              </Button>
            </ButtonFlex>
          </IdenBoxRight>
        </WholeBox>
      </LoginCtn>
    </Layout>
  );
};

const LoginCtn = styled.div`
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  display: flex;
  position: fixed;
`;

const WholeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const IdenBoxLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #95b3ff;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background: url(${mafia});
  background-size: cover;
  background-position: -100px;
`;

const IdenBoxRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f0400;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  gap: 10px;
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

const SignUpText = styled.div`
  color: white;
`;

const NoticeTextUnder = styled.div`
  font-size: 1rem;
  color: white;
`;

const LoginInput = styled.input`
  border: none;
  margin: 20px 0 0 0;
  width: 220px;
  height: 40px;
  border-radius: 7px;
  padding: 2px 10px;
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #0d0000 0%,
    #820000 51%,
    #750000 100%
  );
  margin: 20px;
  padding: 10px ${props => props.padding || '10px'};
  width: ${props => props.width || '200px'};
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

const ButtonFlex = styled.div`
  display: flex;
`;
export default Login;
