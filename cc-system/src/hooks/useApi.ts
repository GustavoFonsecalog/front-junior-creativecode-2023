export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "Gustavo", email: "gustavofonsecajb@hotmail.com" },
    };
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "Gustavo", email: "gustavofonsecajb@hotmail.com" },
      token: "88733212",
    };
  },
  logout: async () => {
    return { status: true };
  },
});
