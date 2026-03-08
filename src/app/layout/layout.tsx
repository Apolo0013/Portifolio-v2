import Hero from '../../features/Hero/Hero'
import NavBar from '../../features/NavBar/NavBar'
import Projects from '../../features/Projects/Projects'
import Stack from '../../features/Stack/Stack'
import './layout.scss'

//Esse arquivo fazer monta o layout
function Layout() {
    return (
        <main className="layout">
            <NavBar />
            <Hero />
            <Projects />
            <Stack />
        </main>
    )
}

export default Layout