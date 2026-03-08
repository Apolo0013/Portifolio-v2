import { useState } from 'react'
import './TechItem.scss'
import useTechItem from '../../hook/useTechItem'
//Imagens
import { type ImagensStacks, imagens } from '../../assets/stacks/index'

type Props = {
    name: string
    nameImg: ImagensStacks,
    left?: string
}

function TechItem({ name, nameImg, left = '50%' }: Props) {
    console.log(nameImg)
    const [showAbout, SetAbout] = useState<boolean>(false)
    //Hook
    const { GetStackAbout } = useTechItem()
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