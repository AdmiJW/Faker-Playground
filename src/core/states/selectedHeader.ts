import { create } from 'zustand';

// To have a global state to access the current selected header anchor
// In a page with multiple sections of headers, use this state to know which header is currently selected
type State = {
    current: string;
};

type Actions = {
    setCurrent: (current: string) => void;
};

export const useSelectedHeaderStore = create<State & Actions>()((set) => ({
    current: '',
    setCurrent: (current) => set({ current }),
}));
