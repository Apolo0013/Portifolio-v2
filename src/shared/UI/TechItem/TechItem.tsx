//Hooks
import { useEffect, useRef, useState, type RefObject } from 'react'
import { useMediaQuery } from '../../hook/useQueries'
import useTechItem from '../../hook/useTechItem'
//CSS
import './TechItem.scss'
//Imagens
import { type ImagensStacks, imagens } from '../../assets/stacks/index'

type Props = {
    name: string
    nameImg: ImagensStacks,
    refSection: RefObject<HTMLElement | null>, // essa refencia eu irei alterar o z-index dele para o conteudo daqui fica sobre por.
}

function TechItem({
    name,
    nameImg,
    refSection
}: Props) {
    //media queries
    const isMobile: boolean = useMediaQuery('(max-width: 500px) and (pointer: coarse)')
    //estados/states
    const [showAbout, SetAbout] = useState<boolean>(false)
    const [left, setleft] = useState<number>(0)
    //referencias
    const refConteiner = useRef<HTMLDivElement | null>(null)
    //Hook
    const {
        GetStackAbout,
        AjustPositionLeft
    } = useTechItem()
    //effect, chamada em cada mundaca do showAbout
    useEffect(() => {
        if (!refSection.current || !refConteiner.current) return
        if (showAbout) refSection.current.classList.add("!z-50")
        else refSection.current.classList.remove("!z-50")
        //ajusta
        AjustPositionLeft({
            parent: refSection.current,
            child: refConteiner.current,
            setLeft: setleft
        })
    }, [showAbout])

    useEffect(() => {
        
    }, [isMobile])

    return (
        <div
            
            style={{zIndex: showAbout ? 10000 : 5}}
            className='stackproject'
            //eventos
            onMouseEnter={() => {
                //caso for mobile, ele nao terar essa fucionalidade
                if (isMobile) return
                SetAbout(true)
            }}
            onMouseLeave={() => {
                //aqui ambos terar acesso, vai servi como focus/desfoco. Assim retirando o conteiner que mostrar o about/sobre das stacks
                SetAbout(false)
            }}
            onClick={() => {
                //so vai acessa essa fucionalidade caso seja mobile
                if (!isMobile) return
                SetAbout(prev => !prev)
            }}
        >
            <div className='h-[70%] square-asp'>
                <img
                    className='h-full w-full'
                    src={imagens[nameImg]}
                    alt="Nada"
                />
            </div>
            <p className='stackproject-name'>
                {name}
            </p>
            {
                showAbout
                    ? <p
                        //ref
                        ref={refConteiner}
                        className="about-stack"
                        style={{transform: `translateX(${left}px)`}}
                    >
                        {GetStackAbout(nameImg)}
                        </p>
                    : null
            }   
        </div>
    )
}

export default TechItem