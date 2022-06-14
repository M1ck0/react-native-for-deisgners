import { atom } from 'recoil';

const menuState = atom({
  key: 'menuState',
  default: false,
});

export { menuState };
