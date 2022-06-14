import { atom } from 'recoil';

const projectState = atom({
  key: 'projectState',
  default: false,
});

export { projectState };
