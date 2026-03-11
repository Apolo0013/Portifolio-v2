import { create } from "zustand";

type StoreUI = {
    hero: boolean,
    project: boolean
}

export const useStoreUI = create<StoreUI>(() => ({
    hero: false,
    project: false
}))
