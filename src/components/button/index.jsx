import './button.estilos.css'
export function Button({ children, link }) {
    return (

        <a href={link}>
            <button className='button'>
                {children}
            </button>
        </a>
    )
}