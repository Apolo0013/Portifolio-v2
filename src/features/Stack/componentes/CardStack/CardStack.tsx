//Componente/UI
import TechItem from '../../../../shared/UI/TechItem/TechItem'
//Type
import type { MyStacks } from '../../type'
//CSS
import './CardStack.scss'
//Nomes das Stacks
import { nameStacks } from '../../../../shared/assets/stacks'



type Props = {
    AppLayer: MyStacks
    left?: string
}

function CardStack({ left = '50%', AppLayer}: Props) {

    return (
        <article className="card-stack">
            <h2 className='h2-text'>{AppLayer.name}</h2>
            <div className='card-stacks-list'>
                {
                    
                    AppLayer.stackimg.map((stackimg, key) => (
                            <div key={key}>
                                <TechItem
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