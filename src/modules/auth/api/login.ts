import { BaseResponse, httpClient } from "@/lib/http-client";
import { USER_LOCALSTORAGE_KEY, useAuthStore } from "../auth-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = BaseResponse<{
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  image: string;
  refresh: string;
  access: string;
}>;

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(params: LoginRequest) {
      const response = await httpClient.post<LoginResponse>(
        "/auth/login/",
        params
      );

      setUser(response.data.data);
      window.localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.data)
      );
      queryClient.resetQueries();
      return response;
    },
  });
};
