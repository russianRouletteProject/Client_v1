import { atom } from 'recoil';

export const roomListState = atom({
  key: 'roomListState',
  default: [],
});

export const isMainState = atom({
  key: 'isMainState',
  default: false,
});

export const isListState = atom({
  key: 'isListState',
  default: true,
});

export const headerNicknameState = atom({
  key: 'headerNicknameState',
  default: '',
});

export const modalIsOpenState = atom({
  key: 'modalIsOpenState',
  default: true,
});
