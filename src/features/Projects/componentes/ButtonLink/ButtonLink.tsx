import './ButtonLink.scss'
//imagens
import ImgArrow from '../../../../shared/assets/comum/right-arrow.svg'
import ImgLink from '../../assets/link.svg'

type Props = {
    url: string,
    name: string
}

function ButtonLink({ url, name }: Props) {
    return (
        <button
            className="button-link"
            onClick={() => window.open(url, '_blank')}
        >
            <div className='square-asp h-[50%]'>
                <img
                    src={ImgLink}
                    alt="" />
            </div>
            <p>{name}</p> 
            <div className='square-asp h-[30%]'>
                <img
                    src={ImgArrow}
                    alt="Imagem de um ceta para direita"
                />
            </div>
        </button>
    )
}

export default ButtonLink