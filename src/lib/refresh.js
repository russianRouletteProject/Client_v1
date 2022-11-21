// // src/lib/refresh.ts
// import axios from 'axios';
// import moment from 'moment';
// import { Cookies } from 'react-cookie';

// const refresh = async config => {
//   //쿠키에 담긴 refresh token
//   const refreshToken = Cookies.get('refreshToken');
//   //만료시간
//   const expireAt = localStorage.getItem('expiresAt');
//   //access token
//   let token = localStorage.getItem('accessToken');

//   // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
//   if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
//     const body = {
//       refreshToken,
//     };

//     // 토큰 갱신 서버통신
//     const { data } = await axios.post(`/auth/token`, body);
//     token = data.data.accessToken;
//     localStorage.setItem('accessToken', data.data.accessToken);
//     localStorage.setItem(
//       'expireAt',
//       moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'),
//     );
//   }

//   config.headers['Authorization'] = `Bearer ${token}`;

//   return config;
// };

// const refreshErrorHandle = err => {
//   Cookies.remove('refreshToken');
// };

// export { refresh, refreshErrorHandle };
