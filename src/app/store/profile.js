import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: {
    name: "",
    email: "",
    password: "",
    remember: true,
    phone: '',
    role: "Admain",
    IsSignIn: false,
    src: "/customer3.jpeg",
  },
  Admaininfo: {
    name: "omar",
    email: "omar.abdallah5209@gmail.com",
    role: "Admin",
    password: "1234",
  },
  setProfile: (updatedFields) =>
    set((state) => ({
      profile: {
        ...state.profile,
        ...updatedFields,
      },
    })),
}));