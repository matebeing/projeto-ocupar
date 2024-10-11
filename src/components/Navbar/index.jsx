import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative border-b-[2px] border-l-gray" >
            <section className='flex items-center justify-between lg:max-w-[1100px] sm:w-full sm:px-2 lg:mx-auto py-4'>
                <section className='flex flex-column'>
                    <img src={Logo} alt="logo" className='w-20' />
                    <ul className={`lg:flex sm:hidden items-center ml-20 gap-12 flex-row text-lg font-medium`}>
                        <li><a href="#acoes">Ações</a></li>
                        <li><a href="#sobre">Quem somos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </section>
                <section>
                    <button onClick={toggleMenu} className="focus:outline-none lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <p className='lg:block sm:hidden'>
                        <FaInstagram size={30}/>
                    </p>
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
                        <li onClick={toggleMenu}><a href="#acoes">Ações</a></li>
                        <li onClick={toggleMenu}><a href="#sobre">Quem somos</a></li>
                        <li onClick={toggleMenu}><a href="#contato">Contato</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
