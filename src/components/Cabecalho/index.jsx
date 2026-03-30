import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#351205] h-[79px] flex items-center justify-between px-6 md:px-10 relative">

      {/* Logo */}
      <div>
        <NavLink to="/">
          <h1 className="text-[#F2A900] font-extrabold text-lg md:text-xl">
            I EREEQ-CO
          </h1>
        </NavLink>
      </div>

      {/* Botão mobile */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menu */}
      <nav
        className={`
          absolute md:static top-[79px] left-0 w-full md:w-auto
          bg-[#351205] md:bg-transparent
          flex flex-col md:flex-row items-center
          gap-6 md:gap-8
          py-4 md:py-0
          transition-all duration-300
          ${menuOpen ? 'flex' : 'hidden md:flex'}
        `}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold text-sm md:text-base pb-1 ${
              isActive
                ? 'text-[#F2A900] border-b-2 border-[#F2A900]'
                : 'text-white'
            }`
          }
        >
          Sobre o Evento
        </NavLink>

        <NavLink
          to="/Participants"
          className={({ isActive }) =>
            `font-semibold text-sm md:text-base pb-1 ${
              isActive
                ? 'text-[#F2A900] border-b-2 border-[#F2A900]'
                : 'text-white'
            }`
          }
        >
          Participantes
        </NavLink>

        <NavLink
          to="/Letter"
          className={({ isActive }) =>
            `font-semibold text-sm md:text-base pb-1 ${
              isActive
                ? 'text-[#F2A900] border-b-2 border-[#F2A900]'
                : 'text-white'
            }`
          }
        >
          Carta do I EREEQ-CO
        </NavLink>
      </nav>
    </header>
  );
}