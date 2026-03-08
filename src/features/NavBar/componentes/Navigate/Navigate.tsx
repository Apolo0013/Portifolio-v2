import './Navigate.scss'

type Props = {
    name: string
}

function Navigate({name}: Props) {
    return (
        <div
            className='navigate'
            aria-controls='navigation'
            aria-label={"Navegar " + name}
        >
            <a href="#">{name}</a>
        </div>
    )
}

export default Navigate