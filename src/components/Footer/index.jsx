import LabIntegra from '../../assets/labintegra.png'

const Footer = () => {
    return (
        <footer className="flex items-center justify-around  text-[#7a7a7a] mb-20  py-5 ">
            <section className='flex items-center justify-between w-full max-w-[1100px] mx-auto'>
                <section className='flex flex-column'>
                    <ul className='flex items-center justify-center gap-3 flex-row  '>
                        <li>© 2024 Projeto Ocupar</li>
                        <li>•</li>
                        <li>Site feito com ❤ por Matheus Oliveira</li>
                    </ul>
                </section>
                <section>
                    <img src={LabIntegra} alt="Logo do Lab Integra" className='w-[5rem]'/>
                </section>
            </section>
        </footer>
    )
}
// max-w-[1100px] mx-auto
export default Footer;