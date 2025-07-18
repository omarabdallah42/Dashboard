import { create } from "zustand";

export const useNotificationStore = create((set) => ({
  notification: [],
  setNotification: (notifications) => set({ notification: notifications }),
  
  setNotification: (newNotification) =>
    set((state) => ({
      notification: [...state.notification, newNotification],
    })),
}));
