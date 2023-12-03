import { create } from 'zustand';

interface HeaderStore {
  firstName: string;
  lastName: string;
  setHeader: (firstName: string, lastName: string) => void;
}

const useHeaderStore = create<HeaderStore>((set) => ({
  firstName: 'Breaking',
  lastName: 'Bad',
  setHeader: (firstName, lastName) => {
    set({ firstName, lastName });
  },
}));

export default useHeaderStore;
