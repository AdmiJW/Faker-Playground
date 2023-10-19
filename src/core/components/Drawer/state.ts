import { create } from 'zustand';

type State = {
    isOpen: boolean;
};

type Actions = {
    toggle: () => void;
    close: () => void;
    open: () => void;
};

export const useDrawerStore = create<State & Actions>()((set) => ({
    isOpen: true,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set({ isOpen: false }),
    open: () => set({ isOpen: true }),
}));
