"use client"
import { create } from "zustand"

export const statues = create((set) => ({
  themeLight: true,
  signIn:true,
  setThemeLight: () => set((state) => ({
    themeLight: !state.themeLight
  })), 
}));