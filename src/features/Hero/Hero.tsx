import { useEffect, useRef } from 'react'
import ButtonUI from '../../shared/UI/Button/ButtonUI'
import './Hero.scss'
import useObs from '../../shared/hook/useObs'

function Hero() {
    const refConteiner = useRef<HTMLElement | null>(null)
    //hook
    const {ObserverElement} = useObs()
    useEffect(() => {
        if (!refConteiner.current) return 
        ObserverElement({
            el: refConteiner.current,
            
        })
    }, [])
    return (
        <section className='hero' ref={refConteiner}>
            <article className='wraper-content-hero'>
                <div className='w-full h-fit-content flex flex-col'>
                    <h1 className='h1-text'>Apolonio Guilherme</h1>
                    <p className='p-text'>Front-End Desenvolvedor</p>
                </div>
                <p className='p-text'>Desenvolvo interfaces modernas com React e possuo experiência com APIs em .NET.</p>
                <div className='w-[200px] h-[45px]'>
                    <ButtonUI name="Ver Projetos" />
                </div>
            </article>
        </section>
    )
}

export default Hero