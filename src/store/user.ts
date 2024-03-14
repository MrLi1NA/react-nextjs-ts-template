import { produce } from 'immer';
import { create } from 'zustand';

interface UserInfo {
  name: string;
  age: number;
}

interface UserState {
  userInfo: UserInfo;
  token: string;
  updateUserInfo: (params: UserInfo) => void;
  updateToken: (token: string) => void;
  updateAge: (age: number) => void;
}

const useUserStore = create<UserState>((set) => ({
  userInfo: {
    name: 'test',
    age: 18,
  },
  token: 's1',
  updateUserInfo(userInfo) {
    set({ userInfo });
  },
  updateToken(token) {
    set({ token });
  },
  updateAge(age) {
    set(
      produce((state) => {
        state.userInfo.age = age;
      }),
    );
  },
}));

export default useUserStore;
