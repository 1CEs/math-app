// playerStore.ts
import { ImageSourcePropType } from 'react-native';
import { create } from 'zustand';
import { savePlayer, loadPlayer } from '@/database/db';

type PlayerStore = {
  player: Player | null;
  setPlayer: (player: Player) => void;
  setPlayerName: (name: string) => void;
  setPlayerAvatar: (avatar: string) => void;
  loadPlayerFromStorage: () => void;
};

export const usePlayerStore = create<PlayerStore>((set) => ({
  player: null,

  setPlayer: (player: Player) => {
    savePlayer(player);
    set({ player });
  },

  setPlayerName: (name: string) =>
    set((state) => {
      if (!state.player) return { player: null };
      const updated = { ...state.player, name };
      savePlayer(updated);
      return { player: updated };
    }),

  setPlayerAvatar: (avatar: string) =>
    set((state) => {
      if (!state.player) return { player: null };
      const updated = { ...state.player, avatar };
      savePlayer(updated);
      return { player: updated };
    }),

  loadPlayerFromStorage: async () => {
    const player = await loadPlayer();
    if (player) {
      set({ player });
    }
  },
}));
