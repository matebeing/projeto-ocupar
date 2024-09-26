import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between sticky border-b-2 py-4">
            <section className='flex items-center justify-between w-full lg:max-w-[1100px] lg:mx-auto'>
                <section className='flex flex-column'>
                    <img src={Logo} alt="logo" className='w-20' />
                    <ul className='flex items-center ml-20 gap-12 flex-row text-lg font-medium md:hidden '>
                        <li>Inicio</li>
                        <li>Projetos</li>
                        <li>Quem somos</li>
                        <li>Contato</li>
                    </ul>
                </section>
                <section>
                        \\
                </section>
            </section>
        </nav>
    )
}
// max-w-[1100px] mx-auto
export default Navbar;