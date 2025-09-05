import { create } from "zustand";

interface Store {
  movies: any;
  setMovies: (apiCall: any) => void;
  secilenFilmMuzikleri: number | null;
  secilenFilmSahneleri: number | null;
  secilenFilmSahnesiURL: string | null;
  secilenFilmMuzigiURL: string | null;
  setSecilenFilmMuzikleri: (number: number) => void;
  setSecilenFilmSahneleri: (number: number) => void;
  setSecilenFilmSahnesiURL: (url: string | null) => void;
  setSecilenFilmMuzigiURL: (url: string | null) => void;
  onPause: boolean;
  setOnPause: (status: boolean) => void;
}

const useStore = create<Store>()((set) => ({
  movies: [],
  setMovies: (apiCall) => {
    set(() => ({
      movies: apiCall,
    }));
  },
  secilenFilmMuzikleri: null,
  secilenFilmSahneleri: null,
  secilenFilmSahnesiURL: null,
  secilenFilmMuzigiURL: null,
  onPause: true,
  setSecilenFilmMuzikleri: (number: number) => {
    set(() => ({
      secilenFilmMuzikleri: number,
    }));
  },
  setSecilenFilmSahneleri: (number: number) => {
    set(() => ({
      secilenFilmSahneleri: number,
    }));
  },
  setSecilenFilmSahnesiURL: (url: string | null) => {
    set(() => ({
      secilenFilmSahnesiURL: url,
    }));
  },
  setSecilenFilmMuzigiURL: (url: string | null) => {
    set(() => ({
      secilenFilmMuzigiURL: url,
    }));
  },
  setOnPause: (status: boolean) => {
    set(() => ({
      onPause: status,
    }));
  },
}));

export default useStore;
