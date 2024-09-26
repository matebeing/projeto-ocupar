import ocuparBanner from '../../assets/ocupar-banner.png'
import materiaisBanner from '../../assets/materiais-didaticos-banner.png'
import bancoBanner from '../../assets/banco-de-provas-banner.png'

const Projects = () => {
    return (
        <main className='flex flex-col gap-20 items-center justify-center mt-20 relative h-auto max-w-[1100px] mx-auto'>
            <section className='flex flex-col items-center gap-10'>
                <h1 className='border-l-[10px] border-l-[#F09048] pl-5 text-3xl text-[#F09048] font-bold'>Conheça nossos projetos</h1>
                <section className='flex flex-col gap-28 my-20'>
                    <section className='flex flex-row gap-24'>
                        <img src={ocuparBanner} className='w-80 object-contain'></img>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#F09048]'>Conhecer A Universidade</h2>
                            <p className='text-xl text-[#909090]'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <div className='flex justify-center items-center bg-[#F09048] w-32 p-3 text-white rounded-lg'>Saiba mais</div>
                        </div>
                    </section>
                    <section className='flex flex-row gap-24'>
                        <img src={materiaisBanner} className='w-80 object-contain'></img>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#F09048]'>Materiais Didáticos</h2>
                            <p className='text-xl text-[#909090]'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <div className='flex justify-center items-center bg-[#F09048] w-32 p-3 text-white rounded-lg'>Saiba mais</div>
                        </div>
                    </section>
                    <section className='flex flex-row gap-24'>
                        <img src={bancoBanner} className='w-80 object-contain'></img>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#F09048]'>Banco de Provas</h2>
                            <p className='text-xl text-[#909090]'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <div className='flex justify-center items-center bg-[#F09048] w-32 p-3 text-white rounded-lg'>Saiba mais</div>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Projects;