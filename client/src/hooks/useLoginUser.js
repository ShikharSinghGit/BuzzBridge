import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await axios.post("/user/login", payload);
      return response?.data;
    },
  });
};
