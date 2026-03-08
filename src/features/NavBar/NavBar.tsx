import Navigate from './componentes/Navigate/Navigate'
import './NavBar.scss'

function NavBar() {
    return (
        <nav className='navbar'> 
            <Navigate name="Projetos"/>
            <Navigate name="Sobre"/>
            <Navigate name="Stack"/>
            <Navigate name="Contato"/>
        </nav>
    )
}

export default NavBar