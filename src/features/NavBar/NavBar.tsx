//componentes
import Navigate from './componentes/Navigate/Navigate'
//CSS
import './NavBar.scss'
//imagens
import ImgMenu from './assets/menu-burger.svg'
import ImgCode from './assets/code.svg'
//hook
import { useMediaQuery } from '../../shared/hook/useQueries'
import { useState } from 'react'

type Props = {
    stateClass: string
}

function NavBar({ stateClass }: Props) {
    //media queries
    const isMobile: boolean = useMediaQuery("(max-width: 500px) and (pointer: coarse)")
    //navleft 
    const [navleft, setnavleft] = useState<boolean>(false)
    return (
        <nav
            style={{
                left: navleft ? '0%' : '-50%'
            }}
            className={`navbar ${stateClass}`}
        > 
            {
                //o conteiner ondem contem o icone e o meu nome, ele so vai aparece quando nao for mobile
                !isMobile  
                    ?   <div className='conteiner-icone'>
                            <img
                                src={ImgCode}
                                alt="Imagem de codigo"
                            />
                            <p className='p-text'>Apolonio</p>
                        </div>
                    : null
            }
            {
                // Divider do navbar so aparece quando nao for mobile.
                !isMobile 
                    ? <div className='divider-navbar'></div>
                    : null
            }

            <div className='wraper-nav'>    
                <Navigate name="Projetos" href='#project'/>
                <Navigate name="Sobre" href='#about'/>
                <Navigate name="Stack" href='#stack'/>
                <Navigate name="Contato" href='#contact' />
            </div>
            {/*caso for mobile, vamos add o menu burger*/}
            { 
                isMobile
                    ?
                    <div
                        className='menu-burger'
                        onClick={() => setnavleft(prev => !prev)}
                    >
                            <img
                                className='w-full h-full'
                                src={ImgMenu}
                                alt="Imagem do menu burger" />
                        </div>
                    : null
            }
        </nav>
    )
}

export default NavBar