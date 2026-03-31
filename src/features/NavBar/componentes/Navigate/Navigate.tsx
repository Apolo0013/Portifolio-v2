import './Navigate.scss'
//hook
import { useMediaQuery } from '../../../../shared/hook/useQueries'
//imagens
import ImgArrow from '../../../../shared/assets/comum/right-arrow.svg'

type Props = {
    name: string,
    href?: string
}

function Navigate({ name, href = '#' }: Props) {
    const isMobile: boolean = useMediaQuery('(max-width: 500px) and (pointer: coarse)')
    return (
        <div
            className='navigate'
            aria-controls='navigation'
            aria-label={"Navegar " + name}
        >
            <a
                href={href}
                className='p-text'
            >{name}</a>
            { 
                isMobile
                    ? <div className='h-[50%] aspect-square'>
                        <img
                            src={ImgArrow}
                            alt="Imagem de um arco para direita"
                        />
                    </div>
                    : null
            }
        </div>
    )
}

export default Navigate