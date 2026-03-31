export function Button({ children, link }) {
    return (
        <a href={link}>
            <button
                className="
                    bg-[#104303]
                    hover:bg-[#0d3602]
                    text-white
                    font-semibold
                    rounded-full
                    px-5 py-2.5
                    md:px-6 md:py-3
                    text-sm md:text-base
                    flex items-center justify-center
                    transition-colors duration-300
                "
            >
                {children}
            </button>
        </a>
    )
}