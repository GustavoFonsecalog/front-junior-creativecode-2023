import axios from "axios";

const api = axios.create({
  baseURL: process.env.CC_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "Gustavo", email: "gustavofonsecajb@hotmail.com" },
    };
    const response = await api.post("/validate", { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "Gustavo", email: "gustavofonsecajb@hotmail.com" },
      token: "88733212",
    };
    const response = await api.post("/signin", { email, password });
    return response.data;
  },
  logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
