import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { CookiesProvider } from 'react-cookie';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <RecoilRoot>
          <GlobalStyles />
          <Router />
        </RecoilRoot>
      </CookiesProvider>
    </QueryClientProvider>
  );
}
export default App;
