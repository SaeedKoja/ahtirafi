import { create } from "zustand";
import { LoginResponse } from "./api/login";

export const USER_LOCALSTORAGE_KEY = "info_user";

export type User = LoginResponse["data"];

interface AuthState {
  user?: User;
  setUser: (user: User | undefined) => void;
}

const getInitialUserData = () => {
  if (typeof window === "undefined") return undefined;

  const userInfo = window.localStorage.getItem(USER_LOCALSTORAGE_KEY);
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return undefined;
};

export const useAuthStore = create<AuthState>()((set) => ({
  user: getInitialUserData(),
  setUser: (user) => {
    set({ user });
  },
}));
