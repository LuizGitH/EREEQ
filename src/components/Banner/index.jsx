import { Button } from '../button'

export function Banner() {
  return (
    <section
      className="
        w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-screen
        bg-[url('/banner.jpg')] bg-cover bg-center
        flex flex-col justify-center items-center
        text-center text-white px-4
      "
    >

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[723px] mb-4">
        I Encontro Regional de Educação Escolar
      </h1>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[723px] mb-4">
        Quilombola do Centro-Oeste
      </h1>

      <p className="text-sm sm:text-base md:text-lg max-w-[550px] mb-6 leading-relaxed">
        Um espaço de diálogo, valorização cultural e fortalecimento da Educação Escolar Quilombola no Centro-Oeste brasileiro.
      </p>

      <Button link="https://www.youtube.com/">
        Conheça o Evento
      </Button>

    </section>
  )
}