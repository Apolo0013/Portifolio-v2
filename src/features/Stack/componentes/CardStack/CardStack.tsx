//Componente/UI
import TechItem from '../../../../shared/UI/TechItem/TechItem'
//Type
import type { MyStacks } from '../../type'
//CSS
import './CardStack.scss'
//Nomes das Stacks
import { nameStacks } from '../../../../shared/assets/stacks'
import type { RefObject } from 'react'


type Props = {
    AppLayer: MyStacks,
    refSection: RefObject<HTMLElement | null>, // essa refencia eu irei alterar o z-index dele para o conteudo daqui fica sobre por.
    left?: string
}

function CardStack({ left = '50%', refSection, AppLayer}: Props) {
    return (
        <article className="card-stack">
            <h2 className='h2-text'>{AppLayer.name}</h2>
            <div className='card-stacks-list'>
                {
                    
                    AppLayer.stackimg.map((stackimg, key) => (
                            <div key={key}>
                                <TechItem
                                    refSection={refSection}
                                    name={nameStacks[stackimg]}
                                    left={left}
                                    nameImg={stackimg}
                                />
                            </div>
                        ))
                }
            </div>
        </article>
    )
}

export default CardStack