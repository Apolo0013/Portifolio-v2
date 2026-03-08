import type { AboutProjectCard } from '../../type'
import ButtonLink from '../ButtonLink/ButtonLink'
import TechItem from '../../../../shared/UI/TechItem/TechItem'
import './ProjectCard.scss'


function ProjectCard({name, aboutProject, stacks, url}: AboutProjectCard) {
    return (
        <article className='projectcard'>
            <div className='w-full h-full flex flex-col gap-0'>
                <h2 className='h2-text'>{name}</h2>
                <p className='p-text'>{aboutProject}</p>
            </div>
            <div className='stack-project'>
                { 
                    stacks.map((v, k) => (
                        <TechItem
                            name={v.name}
                            nameImg={v.nameImg}
                            key={k} />
                    ))
                }
            </div>
            <div className='col-start-2 col-end-3 h-full w-full flex flex-center'>
                {/*wraper para o ButtonUI*/}
                <div className='w-[200px] h-[50px]'>
                    <ButtonLink name='GitHub' url={url} />
                </div>
            </div>
        </article>
    )
}

export default ProjectCard