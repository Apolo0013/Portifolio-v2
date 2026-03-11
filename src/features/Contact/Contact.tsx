import './Contact.scss'
//imagens
import ImgGitHub from './assets/github.svg'
import ImgLinkendin from './assets/linkendin.svg'
import ImgEmail from './assets/email.svg'
import ButtonUI from '../../shared/UI/Button/ButtonUI'

function Contact() {
    return (
        <section className='wraper-contact'>
            <div className="contact">
                <h1 className="h1-text">Contato</h1>
                <div className="divider-about"><div></div></div>
                <ul>
                    <li>
                        <img
                            src={ImgEmail}
                            alt="Imagem de email"
                        />
                        <p>
                            <a href="mailto:apolobio913@gmail.com?subject=Contato%20do%20site&body=Olá,%20gostaria%20de%20falar%20com%20você.">apolobio913@gmail.com</a>
                        </p>
                    </li>
                    <li>
                        <img
                            src={ImgLinkendin}
                            alt="Imagem do linkendin" />
                        <p>
                            <a href="#">Linkedin</a>
                        </p>
                    </li>
                    <li>
                        <img
                            src={ImgGitHub}
                            alt="Imagem do GitHub"
                        />
                        <p>
                            <a href="#">GitHub</a>
                        </p>
                    </li>
                </ul>
                <div className="divider-about"><div></div></div>
                <div className='flex flex-center h-[50px] w-full'>
                    <div className='h-full w-[200px]'>
                        <ButtonUI
                            name='Contate-me'
                        />
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default Contact