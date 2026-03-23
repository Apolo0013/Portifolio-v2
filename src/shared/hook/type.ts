import type { Dispatch, SetStateAction } from "react"

export type ParamMoveBall = {
    el: HTMLElement,
    elLayout: HTMLElement
}

export type XeY = { x: string, y: string }

export type ClassNav = 'stick-active' | 'stack-disbled'

export type ParamObsSentinel = {
    setClassNav: Dispatch<SetStateAction<ClassNav>>,
    elSentinel: HTMLDivElement
}