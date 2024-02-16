import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await axios.post("user/register", payload);
      return response?.data?.item[0];
    },
  });
};
