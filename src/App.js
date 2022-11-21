import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <GlobalStyles />
        <Router />
      </RecoilRoot>
    </CookiesProvider>
  );
}
export default App;
