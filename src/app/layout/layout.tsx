import { useEffect, useRef, useState } from 'react'
import AboutMe from '../../features/AboutMe/AboutMe'
import Contact from '../../features/Contact/Contact'
import Hero from '../../features/Hero/Hero'
import NavBar from '../../features/NavBar/NavBar'
import Projects from '../../features/Projects/Projects'
import Stack from '../../features/Stack/Stack'
//store
import { useStoreUI } from '../../store/usestore.UI'
//hook
import useBall from '../../shared/hook/useBall'
//css
import './layout.scss'
import type { ClassNav } from '../../shared/hook/type'
import useSentinel from '../../shared/hook/useSentinel'

//Esse arquivo fazer monta o layout
function Layout() {
    //Referencias a elementos
    //referencia a sentinela
    const refSentinel = useRef<HTMLDivElement | null>(null)
    //referencia da bala
    const refBall = useRef<HTMLDivElement | null>(null)
    //referencia deste conteiner
    const refConteiner = useRef<HTMLElement | null>(null)
    //States
    //posicao x e y da bola
    const { x, y } = useStoreUI(state => state.pos)
    //largura da bola
    const width = useStoreUI(state => state.width)
    //state da class da navbar
    const [classNav, setClassNav] = useState<ClassNav>('stack-disbled')
    //hook
    const { viewElement } = useBall()
    const {ObsSentinel} = useSentinel()
    useEffect(() => {
        if (!refBall.current || !refSentinel.current) return
        //sentando a referencia da bola no state global
        useStoreUI.setState({
            elBall: refBall.current
        })
        //chamando o observe do sentinel
        ObsSentinel({
            elSentinel: refSentinel.current,
            setClassNav: setClassNav
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
                ref={refBall}>    
            </div>
            <div
                className="sentinel"
                ref={refSentinel}
            ></div>
            <NavBar stateClass={classNav} />
            <Hero />
            <Projects />
            <Stack />
            <AboutMe />
            <Contact />
        </main>
    )
}

export default Layout