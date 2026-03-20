
import ButtonUI from '../../shared/UI/Button/ButtonUI'
import './Hero.scss'

function Hero() {
    return (
        <section className='section hero' data-id="hero">
            <article className='wraper-content-hero'>
                <div className='w-full h-fit-content flex flex-col gap-2'>
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