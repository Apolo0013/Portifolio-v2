import Divider from '../../shared/UI/Divider/Divider'
import ProjectCard from './componentes/ProjectsCard/ProjectCard'
import './Projects.scss'
import type { AboutProjectCard } from './type'

function Projects() {
    const projects: AboutProjectCard[] = [
  {
    name: "TaskFlow",
    aboutProject: "Aplicação para gerenciamento de tarefas com foco em produtividade e organização de projetos pessoais.",
    stacks: [
      { name: "React", nameImg: "react" },
      { name: "TypeScript", nameImg: "ts" },
      { name: "Zustand", nameImg: "zustand" }
    ],
    url: "https://taskflow-demo.vercel.app"
  },
  {
    name: "DevNotes",
    aboutProject: "Sistema simples de anotações para desenvolvedores salvarem snippets de código e ideias rapidamente.",
    stacks: [
      { name: "React", nameImg: "react" },
      { name: "JavaScript", nameImg: "js" }
    ],
    url: "https://devnotes-demo.vercel.app"
  },
  {
    name: "StackBoard",
    aboutProject: "Dashboard visual para listar tecnologias estudadas e acompanhar progresso de aprendizado.",
    stacks: [
      { name: "React", nameImg: "react" },
      { name: "TypeScript", nameImg: "ts" },
      { name: "Zustand", nameImg: "zustand" }
    ],
    url: "https://stackboard-demo.vercel.app"
  },
  {
    name: "ApiMonitor",
    aboutProject: "Ferramenta simples para monitorar respostas de APIs e exibir status de endpoints.",
    stacks: [
      { name: "JavaScript", nameImg: "js" },
      { name: "React", nameImg: "react" }
    ],
    url: "https://apimonitor-demo.vercel.app"
  },
  {
    name: "CodeTracker",
    aboutProject: "Aplicação para registrar horas de estudo e prática em programação.",
    stacks: [
      { name: "React", nameImg: "react" },
      { name: "TypeScript", nameImg: "ts" },
      { name: "C#", nameImg: "cSharp" }
    ],
    url: "https://codetracker-demo.vercel.app"
  }
];
    return (
        <section className='projects'>
            <div className='w-full flex items-center gap-4' aria-label="Titulo sessão projetos">
                <h1 className="h1-text">Projetos</h1>
                <Divider/>
            </div>
            <div className='projects-grid'>
                {
                    projects.map((values, k) => (
                        <ProjectCard
                            key={k}
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
