import { useState } from "react"
import { Button } from "../button"

export function ErrecLetter() {
    const [showPDF, setShowPDF] = useState(false)

    return (
        <section className="w-full bg-[#FFF6E9] py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 font-sans text-justify">

                <h2 className="text-2xl md:text-4xl font-bold text-[#351205] mb-8">
                    Carta do I Encontro Regional de Educação Escolar Quilombola do Centro-Oeste
                </h2>

                <p className="italic text-base md:text-lg text-[#242424] leading-relaxed mb-4">
                    “Nós somos o começo, o meio e o começo. Nossas trajetórias nos movem, nossa ancestralidade nos guia.” — Nego Bispo
                </p>

                <div className="text-base md:text-lg text-[#242424] leading-relaxed mb-4">
                    <p>
                        Nós, participantes do I Encontro Regional de Educação Escolar Quilombola do Centro-Oeste (EREEQ), reunidos entre os dias 1º e 4 de outubro de 2025 no município de Uruaçu (GO), nas dependências do Instituto Federal de Goiás, apresentamos nossas reflexões, reivindicações e compromissos.
                    </p>

                    <p>
                        Reconhecemos que a Educação Escolar Quilombola deve contemplar tanto as escolas quilombolas quanto aquelas que atendem estudantes quilombolas, rompendo com práticas educacionais que historicamente negaram nossa existência, história, oralidade e ancestralidade.
                    </p>

                    <p>
                        Reafirmamos que a efetivação da Educação Escolar Quilombola está indissociavelmente ligada à demarcação e regularização fundiária dos territórios quilombolas, pois é no território que se estruturam os modos próprios de viver, aprender, ensinar e resistir.
                    </p>

                    <p>
                        Exigimos a efetivação das políticas públicas já existentes e a criação de novas políticas com participação direta das comunidades quilombolas, garantindo justiça educacional, autonomia e respeito às especificidades culturais dos nossos povos.
                    </p>

                    <p className="font-semibold mt-4">
                        Uruaçu (GO), 4 de outubro de 2025
                    </p>

                    <p className="font-semibold mt-4"   >
                        Participantes do I EREEQ-CO
                    </p>
                </div>


                {!showPDF ? (
                    <div className="mt-8">
                        <button onClick={() => setShowPDF(true)}
                            className="bg-[#104303] hover:bg-[#0d3602] text-white font-semibold rounded-full px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-baseflex items-center justify-center transition-colors duration-300">
                            Acessar Carta em PDF
                        </button>
                    </div>
                ) : (
                    <div className="mt-10 flex flex-col items-center">
                        <div className="w-full max-w-3xl h-[500px] md:h-[700px] border-8 border-black rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="/carta.pdf"
                                className="w-full h-full"
                                title="Carta PDF"
                            />
                        </div>

                        <p className="mt-6 text-center text-sm md:text-base text-gray-700 font-medium">
                            Clique para acessar a Carta do I EREEQ-CO
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}