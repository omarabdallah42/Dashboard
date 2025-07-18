import { create } from "zustand";

export const SecuritySettings = create((set) => ({
  Password: {
    Password: "1234",
  },
  SetPassword: (password) => set({ Password: password }),
}));


