import { useEffect, useRef } from 'react'
import AboutMe from '../../features/AboutMe/AboutMe'
import Contact from '../../features/Contact/Contact'
import Hero from '../../features/Hero/Hero'
import NavBar from '../../features/NavBar/NavBar'
import Projects from '../../features/Projects/Projects'
import Stack from '../../features/Stack/Stack'
//store
import { useStoreUI } from '../../store/usestore.UI'

//css
import './layout.scss'
import useObs from '../../shared/hook/useObs'

//Esse arquivo fazer monta o layout
function Layout() {
    //referecia da bala
    const refBall = useRef<HTMLDivElement | null>(null)
    //referencia deste conteiner
    const refConteiner = useRef<HTMLElement | null>(null)
    //posicao x e y da bola
    const { x, y } = useStoreUI(state => state.pos)
    //largura da bola
    const width = useStoreUI(state => state.width)
    //hook
    const {viewElement} = useObs()
    useEffect(() => {
        if (!refBall.current) return
        useStoreUI.setState({
            elBall: refBall.current
        })
    }, [])
    return (
        <main className="layout"
            ref={refConteiner}
            onScroll={() => {
                if (!refConteiner.current) return
                viewElement(refConteiner.current)
            }}
        >
            <div
                className="ball"
                style={{
                    left: x,
                    top: y,
                    width
                }}
                ref={refBall}></div>
            <NavBar />
            <Hero />
            <Projects />
            <Stack />
            <AboutMe />
            <Contact />
        </main>
    )
}

export default Layout