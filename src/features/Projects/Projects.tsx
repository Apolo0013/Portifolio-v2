import Divider from '../../shared/UI/Divider/Divider'
import ProjectCard from './componentes/ProjectsCard/ProjectCard'
import './Projects.scss'
//data
import { datas } from '../../data'
import { useRef } from 'react'

function Projects() {
    const refSection = useRef<HTMLElement | null>(null)
    return (
        <section
            id='project'
            className='section projects'
            data-id="project"
            ref={refSection}
        >
            <div className='w-full flex items-center gap-4' aria-label="Titulo sessão projetos">
                <h1 className="h1-text">Projetos</h1>
                <Divider/>
            </div>
            <div className='projects-grid'>
                {
                    
                    datas.projects.map((values, k) => (
                        <ProjectCard
                            key={k}
                            refSection={refSection}
                            aboutProject={values.aboutProject}
                            name={values.name}
                            stacks={values.stacks}
                            url={values.url}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects
