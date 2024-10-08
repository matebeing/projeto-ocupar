import { useState } from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative">
            <section className='flex items-center justify-between w-full lg:max-w-[1100px] sm:w-full sm:px-2 lg:mx-auto py-4'>
                <section className='flex flex-column'>
                    <img src={Logo} alt="logo" className='w-20' />
                    <ul className={`lg:flex sm:hidden items-center ml-20 gap-12 flex-row text-lg font-medium`}>
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
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center gap-4 text-lg font-medium">
                        <li onClick={toggleMenu}>Inicio</li>
                        <li onClick={toggleMenu}>Projetos</li>
                        <li onClick={toggleMenu}>Quem somos</li>
                        <li onClick={toggleMenu}>Contato</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
