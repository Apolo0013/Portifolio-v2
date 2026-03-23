import './AboutMe.scss'
//imagens
import ImgCalendar from './assets/calendar.svg'
import ImgAtomo from './assets/atomo.svg'
import ImgComputer from './assets/computer.svg'
import ImgConstruction from './assets/construction.svg'
import ImgCheck from './assets/check.svg'
import ImgShine from './assets/shine.svg'

function AboutMe() {
    return (
        <section
            id="about"
            className='section wraper-aboutme'
            data-id="about"
        >
            <div className='aboutme'>
                <h1 className="h1-text">Sobre Mim</h1>
                <div className="divider-about"><div></div></div>
                <ul>
                    <li>
                        <img
                            src={ImgCalendar}
                            alt="Imagem de um calendario"
                        />
                        <p>
                            <strong>2 anos de experiência</strong> em Front-end
                        </p>
                    </li>
                    <li>
                        <img
                            src={ImgAtomo}
                            alt="Imagem de um atomo"
                        />
                        <p>
                            Atualmente focado em <strong>React & C#</strong>
                        </p>
                    </li>
                    <li>
                        <img
                            src={ImgComputer}
                            alt="Imagem de um computador"
                        />
                        <p>
                            Evoluindo para <strong>Full Stack</strong>
                        </p>
                    </li>
                </ul>
                <div className="divider-about"><div></div></div>
                <ul>
                    <li>
                        <img
                            src={ImgShine}
                            alt="Imagem de brilho"
                        />
                        <p>
                            Foco na escrita de <strong>código limpo</strong> e manutenível.
                        </p>
                    </li>
                    <li>
                        <img
                            src={ImgCheck}
                            alt="Imagem de verificacao"
                        />
                        <p>
                            Adoto <strong>boas práticas</strong> de desenvolvimento.
                        </p>
                    </li>
                    <li>
                        <img
                            src={ImgConstruction}
                            alt="Imagem de um contrucao"
                        />
                        <p>
                            Busco criar <strong>arquiteturas escaláveis</strong> e eficientes.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutMe