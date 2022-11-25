import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoom from './pages/MainRoom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RoomList from './pages/RoomList';
import ExtraPersonModal from './components/modal/ExtraPersonModal';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/roomlist" element={<RoomList />} />
        <Route path="/roomlist/mainroom" element={<MainRoom />} />
        <Route path="/modal" element={<ExtraPersonModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
