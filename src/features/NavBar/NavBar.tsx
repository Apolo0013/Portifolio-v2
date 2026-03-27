import Navigate from './componentes/Navigate/Navigate'
import './NavBar.scss'

import ImgMenu from './assets/menu-burger.svg'
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
            <Navigate name="Projetos" href='#project'/>
            <Navigate name="Sobre" href='#about'/>
            <Navigate name="Stack" href='#stack'/>
            <Navigate name="Contato" href='#contact' />
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