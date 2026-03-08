import './ButtonUI.scss'
//imagens
import ImgArrow from '../../assets/comum/right-arrow.svg'

type Props = {
    name: string
}

function ButtonUI({name}: Props) {
    return (
        <button className="buttonUI" aria-label={`Ir ate ${name}`}>
            <a href="#">{name}</a>
            <img
                className='h-[50%] square-asp'
                src={ImgArrow}
                alt="Imagem do Arrow Right" />
        </button>
    )
}

export default ButtonUI