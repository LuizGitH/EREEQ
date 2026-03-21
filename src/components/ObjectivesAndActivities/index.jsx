import './objectivesAndActivities.estilos.css'

export function ObjectivesAndActivities() {
    return (
        <section className='objectivesAndActivities' >
            <div className='container' >
                <h1>
                    Objetivos e Atividades
                </h1>
                <div className='content'>
                    <div className='column'>
                        <h2>
                            Objetivos do Encontro
                        </h2>
                        <p>
                            O I EREEQ-CO tem como principais objetivos:
                        </p>
                        <ul>
                            <li>Fortalecer a Educação Escolar Quilombola na região Centro-Oeste;</li>
                            <li>Promover o diálogo entre comunidades quilombolas, educadores e gestores públicos;</li>
                            <li>Valorizar os saberes tradicionais e práticas pedagógicas quilombolas;</li>
                            <li>Contribuir para a consolidação de políticas públicas educacionais;</li>
                            <li>Estimular a formação continuada de professores e profissionais da educação.</li>
                        </ul>
                    </div>

                    <div className='column'>
                        <h2>
                            Atividades Realizadas
                        </h2>
                        <p>
                            A programação do encontro contempla atividades formativas, culturais e políticas, tais como:
                        </p>
                        <ul>
                            <li>Mesas-redondas temáticas;</li>
                            <li>Rodas de conversa com lideranças quilombolas;</li>
                            <li>Oficinas pedagógicas;</li>
                            <li>Plenárias de discussão e deliberação;</li>
                            <li>Exposições culturais;</li>
                            <li>Apresentações artísticas e culturais.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}