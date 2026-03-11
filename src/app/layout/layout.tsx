import AboutMe from '../../features/AboutMe/AboutMe'
import Contact from '../../features/Contact/Contact'
import Hero from '../../features/Hero/Hero'
import NavBar from '../../features/NavBar/NavBar'
import Projects from '../../features/Projects/Projects'
import Stack from '../../features/Stack/Stack'
//css
import './layout.scss'

//Esse arquivo fazer monta o layout
function Layout() {
    return (
        <main className="layout">
            <NavBar />
            <Hero />
            <Projects />
            <Stack />
            <AboutMe />
            <Contact />
        </main>
    )
}

export default Layout