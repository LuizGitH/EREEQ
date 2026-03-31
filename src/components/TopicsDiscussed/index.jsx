export function TopicsDiscussed() {
    return (
        <section className="w-full bg-[#FFF6E9] py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 font-sans text-justify">

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl md:text-4xl font-bold text-[#351205] mb-6">
                            Temas Debatidos
                        </h1>

                        <p className="text-base md:text-lg text-[#242424] mb-3 leading-relaxed">
                            Durante o I Encontro Regional de Educação Escolar Quilombola do Centro-Oeste, são debatidos temas centrais para o fortalecimento da educação, da identidade e dos direitos das comunidades quilombolas, incluindo:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-base md:text-lg text-[#242424] leading-relaxed">
                                Educação Escolar Quilombola e seus desafios contemporâneos;
                            </li>
                            <li className="text-base md:text-lg text-[#242424] leading-relaxed">
                                Políticas públicas voltadas às comunidades quilombolas;
                            </li>
                            <li className="text-base md:text-lg text-[#242424] leading-relaxed">
                                Saberes tradicionais e práticas educativas ancestrais;
                            </li>
                            <li className="text-base md:text-lg text-[#242424] leading-relaxed">
                                Formação inicial e continuada de professores;
                            </li>
                            <li className="text-base md:text-lg text-[#242424] leading-relaxed">
                                Justiça racial, equidade e direitos humanos;
                            </li>
                            <li className="text-base md:text-lg text-[#242424] leading-relaxed">
                                Cultura, identidade e território quilombola.
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/TopicsDiscussed.jpg"
                            alt="Pessoa palestrando em evento quilombola"
                            className="w-full max-w-[420px] object-cover rounded-lg"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}