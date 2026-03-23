import './Navigate.scss'

type Props = {
    name: string,
    href?: string
}

function Navigate({name, href='#'}: Props) {
    return (
        <div
            className='navigate'
            aria-controls='navigation'
            aria-label={"Navegar " + name}
        >
            <a href={href}>{name}</a>
        </div>
    )
}

export default Navigate