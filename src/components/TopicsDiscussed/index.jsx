import './topicsDiscussed.estilos.css'

export function TopicsDiscussed() {
    return (
        <section className='topicsDiscussed'>
            <div className='topicsDiscussedDiv'>
                <div className='topicsDiscussedText'>
                    <h1>
                        Temas Debatidos
                    </h1>
                    <p>
                        Durante o I Encontro Regional de Educação Escolar Quilombola do Centro-Oeste, são debatidos temas centrais para o fortalecimento da educação, da identidade e dos direitos das comunidades quilombolas, incluindo:
                    </p>
                    <ul>
                        <li>Educação Escolar Quilombola e seus desafios contemporâneos; </li>
                        <li>Políticas públicas voltadas às comunidades quilombolas; </li>
                        <li>Saberes tradicionais e práticas educativas ancestrais;</li>
                        <li>Formação inicial e continuada de professores; </li>
                        <li>Justiça racial, equidade e direitos humanos;</li>
                        <li>Cultura, identidade e território quilombola.</li>
                    </ul>
                </div>
                <div className='topicsDiscussedImg'>
                    <img src="/TopicsDiscussed.jpg" alt="Pessoa palestrando em evento quilombola" />
                </div>
            </div>

        </section>
    )
}