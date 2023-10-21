import { create } from 'zustand';

// To have a global state to access the current selected header anchor
// In a page with multiple sections of headers, use this state to know which header is currently selected

type State = {
    isDarkMode: boolean;
};

type Actions = {
    setDarkMode: (isDarkMode: boolean) => void;
};

export const useDarkModeStore = create<State & Actions>()((set) => ({
    isDarkMode: false,
    setDarkMode: (isDarkMode) => set({ isDarkMode }),
}));
