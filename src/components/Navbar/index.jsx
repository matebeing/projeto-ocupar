import { useState } from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="lg:flex lg:items-center lg:justify-between border-b-2 py-4">
            <section className='flex items-center justify-between w-full lg:max-w-[1100px] sm:w-full sm:px-2 lg:mx-auto'>
                <section className='flex flex-column'>
                    <img src={Logo} alt="logo" className='w-20' />
                    <ul className={`lg:flex sm:hidden items-center ml-20 gap-12 flex-row text-lg font-medium ${isOpen ? 'block' : 'hidden'} lg:block`}>
                        <li>Inicio</li>
                        <li>Projetos</li>
                        <li>Quem somos</li>
                        <li>Contato</li>
                    </ul>
                </section>
                <section className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                </section>
            </section>
            {isOpen && (
                <ul className="flex flex-col items-center gap-4 lg:hidden bg-white border-b-2 p-4">
                    <li>Inicio</li>
                    <li>Projetos</li>
                    <li>Quem somos</li>
                    <li>Contato</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
