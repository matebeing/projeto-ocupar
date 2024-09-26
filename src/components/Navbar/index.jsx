import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <nav className="lg:flex lg:items-center lg:justify-between border-b-2 py-4">
            <section className='flex items-center justify-between w-full lg:max-w-[1100px] sm:max-w-[20rem] mx-auto'>
                <section className='flex flex-column'>
                    <img src={Logo} alt="logo" className='w-20' />
                    <ul className='lg:flex sm:hidden items-center ml-20 gap-12 flex-row text-lg font-medium '>
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
//flex items-center justify-between sticky border-b-2 py-4
export default Navbar;