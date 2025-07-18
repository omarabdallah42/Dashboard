import { create } from "zustand";

export const WebsiteState = create((set) => ({
  Website: {
    domain: "Store",
    SupportEmail: "Store@gmail.com",
    SupportPhone: "01028868762",
    role: "Admin",
  },
  About: "This is a sample website description. It can be used to provide information about the website, its purpose, and any other relevant details.",
  setAbout: (about) => set({ About: about }),
  SetWebsite: (updatedFields) =>
    set((state) => ({
      Website: {
        ...state.Website,
        ...updatedFields,
      },
    })),
}));


