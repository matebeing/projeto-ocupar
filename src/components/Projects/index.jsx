import ocuparBanner from '../../assets/ocupar-banner.png'
import materiaisBanner from '../../assets/materiais-didaticos-banner.png'
import bancoBanner from '../../assets/banco-de-provas-banner.png'
import { motion } from "motion/react"

const Projects = () => {
    return (
        <section id="acoes" className='flex flex-col gap-20 items-center justify-center mt-20 relative h-auto lg:max-w-[1100px] sm:max-w-[20rem] mx-auto'>
             <h1 className='lg:border-l-[10px] lg:border-l-[#F09048] pl-5 text-3xl text-[#F09048] font-bold sm:text-center'>Conheça nossas ações</h1>
            <section className='flex flex-col items-center gap-10'>
                <section className='flex flex-col gap-28 '>
                    <motion.section className='flex lg:flex-row items-center sm:flex-col gap-24 bg-[#fdfcfb] rounded-lg border border-[#F09048]'
                        initial={{  opacity: 0, scale: 0  }}
                        whileInView={{opacity: 1, scale: 1 }}
                    >
                                
                        <div className='flex flex-col items-center  py-20 px-10  '>
                            <img src={ocuparBanner} className='w-80 object-contain'></img>
                            {/* <h2 className='text-2xl font-bold text-[#F09048]'>Conhecer A Universidade</h2> */}
                            <p className='text-xl text-[#909090] sm:text-justify lg:text-center py-5' >O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <div className='flex justify-center items-center bg-[#F09048] lg:w-40 sm:w-full p-3 text-white rounded-lg'>Saiba mais</div>
                        </div>
                    </motion.section>
                    <motion.section className='flex lg:flex-row sm:flex-col gap-24'
                        initial={{  opacity: 0, scale: 0  }}
                        whileInView={{opacity: 1, scale: 1 }}
                    >
                        <img src={materiaisBanner} className='w-80 object-contain'></img>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#F09048]'>Materiais Didáticos</h2>
                            <p className='text-xl text-[#909090] sm:text-justify'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <div className='flex justify-center items-center lg:w-32 p-3 border border-[#F09048] text-[#F09048] font-semibold rounded-lg'>Saiba mais</div>
                        </div>
                    </motion.section>
                    <motion.section className='flex lg:flex-row sm:flex-col gap-24'
                        initial={{  opacity: 0, scale: 0  }}
                        whileInView={{opacity: 1, scale: 1 }}
                    >
                        <img src={bancoBanner} className='w-80 object-contain'></img>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#F09048]'>Banco de Provas</h2>
                            <p className='text-xl text-[#909090] sm:text-justify'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <div className='flex justify-center items-center lg:w-32 p-3 border border-[#F09048] text-[#F09048] font-semibold  rounded-lg'>Saiba mais</div>
                        </div>
                    </motion.section>
                </section>
            </section>
        </section>
    )
}

export default Projects;