import { useMutation } from "@tanstack/react-query";
import { USER_LOCALSTORAGE_KEY, useAuthStore } from "../auth-store";

export const useLogout = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    async mutationFn() {
      window.localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      setUser(undefined);
    },
  });
};
