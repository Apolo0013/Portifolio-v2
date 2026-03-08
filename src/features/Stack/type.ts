import type { ImagensStacks } from "../../shared/assets/stacks"

export type NamesAppLayers = 'Back-end' | 'Front-end' | 'Ferramentas'

export type MyStacks = {
    name: NamesAppLayers,
    stackimg: ImagensStacks[]
}