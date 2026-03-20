import { create } from "zustand";
import type { XeY } from "../shared/hook/type";

type StoreUI = {
    elBall: HTMLDivElement | null,
    width: string
    pos: XeY,   
    setPos: (pos: XeY) => void,
    setWidth: (width: string) => void
}

export const useStoreUI = create<StoreUI>((set) => ({
    elBall: null,
    width: '0px',
    pos: { x: '0px', y: '0px' },
    setPos: (pos: XeY) => set({ pos }),
    setWidth: (width: string) => set({width})
}))
