import { useStoreUI } from "../../store/usestore.UI"
import type { ParamMoveBall } from "./type"

function useBall() {
    function randint(min: number, max: number): number {
       return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function MoveBall({ el, elLayout }: ParamMoveBall) {
        type sections = "hero" | "project" | "contact" | "about" | "stack"
        //pegando posicao do eixo y
        const { y } = el.getBoundingClientRect()
        //pegando a posicao eixo X
        const target = el.dataset.id as sections
        if (!target) return
        //eixo x
        let x: number = 0
        //largura
        let width: number = 0
        if (target == 'hero') {
            width = 400
            x = randint(70, 90)
        }
        else if (target == 'about') {
            width = 450
            x = randint(5, 20)
        }
        else if (target == 'contact') {
            width = 200
            x = randint(80, 90)
        }
        else if (target == 'project') {
            width = 270
            x = randint(10, 30)
        }
        else if (target == 'stack') {
            width = 300
            x = randint(50, 80)
        }
        //add a posicao
        setPos({ x: x + '%', y: (y + elLayout.scrollTop) + "px" })
        //add a largura dele
        setWidth(width + 'px')
    }

    function viewElement(elLayout: HTMLElement) {
        const { width, height } = elLayout.getBoundingClientRect()
        const x: number = width / 2
        const y: number = height / 2
        const elemento: Element | null = document.elementFromPoint(x, y)
        if (!elemento) return null
        const elementoTarget: Element | null = elemento.closest(".section")
        if (elementoTarget) MoveBall({
            el: elementoTarget as HTMLElement,
            elLayout: elLayout
        })
    }

    //store
    const setPos = useStoreUI(state => state.setPos)
    const setWidth = useStoreUI(state => state.setWidth)

    return {
        viewElement
    }
}

export default useBall