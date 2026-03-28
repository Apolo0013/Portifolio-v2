import ButtonLink from '../ButtonLink/ButtonLink'
import TechItem from '../../../../shared/UI/TechItem/TechItem'
import './ProjectCard.scss'
//
import type { AboutProjectCard } from '../../../../data/type'
import type { RefObject } from 'react'
//props
interface Props extends AboutProjectCard {
    refSection: RefObject<HTMLElement | null>
}

function ProjectCard({ name, aboutProject, stacks, url, refSection }: Props) {
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
                            refSection={refSection}
                            name={v.name}
                            nameImg={v.nameImg}
                            key={k} />
                    ))
                }
            </div>
            <div className='wraper-botao-link'>
                {/*wraper para o ButtonUI*/}
                
                <ButtonLink name='GitHub' url={url} />
            </div>
        </article>
    )
}

export default ProjectCard