import Navigate from './componentes/Navigate/Navigate'
import './NavBar.scss'

type Props = {
    stateClass: string
}

function NavBar({ stateClass }: Props) {
    return (
        <nav className={`navbar ${stateClass}`}> 
            <Navigate name="Projetos" href='#project'/>
            <Navigate name="Sobre" href='#about'/>
            <Navigate name="Stack" href='#stack'/>
            <Navigate name="Contato" href='#contact'/>
        </nav>
    )
}

export default NavBar