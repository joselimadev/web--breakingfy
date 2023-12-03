import { create } from 'zustand';

interface HeaderStore {
  firstName: string | null;
  lastName: string | null;
  setHeader: (firstName: string, lastName: string) => void;
}

const useHeaderStore = create<HeaderStore>((set) => ({
  firstName: null,
  lastName: null,
  setHeader: (firstName, lastName) => {
    set({ firstName, lastName });
  },
}));

export default useHeaderStore;
