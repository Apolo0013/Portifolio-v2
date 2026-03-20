import { useEffect, useState, type RefObject } from 'react'
import './TechItem.scss'
import useTechItem from '../../hook/useTechItem'
//Imagens
import { type ImagensStacks, imagens } from '../../assets/stacks/index'

type Props = {
    name: string
    nameImg: ImagensStacks,
    refSection: RefObject<HTMLElement | null>, // essa refencia eu irei alterar o z-index dele para o conteudo daqui fica sobre por.
    left?: string
}

function TechItem({ name, nameImg, refSection, left = '50%' }: Props) {
    const [showAbout, SetAbout] = useState<boolean>(false)
    //Hook
    const { GetStackAbout } = useTechItem()
    //effect, chamada em cada mundaca do showAbout
    useEffect(() => {
        if (!refSection.current) return
        if (showAbout) refSection.current.classList.add("!z-50")
        else refSection.current.classList.remove("!z-50")
    }, [showAbout])
    return (
        <div
            style={{zIndex: showAbout ? 10000 : 5}}
            className='stackproject'
            onMouseEnter={() => SetAbout(true)}
            onMouseLeave={() => SetAbout(false)}
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
                        className="about-stack"
                        style={{left: left }}
                    >
                        {GetStackAbout(nameImg)}
                        </p>
                    : null
            }   
        </div>
    )
}

export default TechItem