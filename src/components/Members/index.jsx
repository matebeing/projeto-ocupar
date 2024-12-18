import { useState, useEffect, useRef } from 'react';
import College from '../../assets/colleges.png'
import Background from '../../assets/asfalt--dark.png'
import { motion } from "motion/react"

const Members = () => {
    const [data, setData] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Projeto-Ocupar/landing-page-ocupar/main/members.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }};
        fetchData();
    }, []);
  
    const scrollLeft = () => {
        const container = containerRef.current;
        if (container) {
          container.scrollLeft += 1; 
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;   
          }
        }
    };

    setInterval(scrollLeft, 50);

    return (
        <div id='sobre' className='flex flex-col gap-20 items-center justify-center mt-20 relative h-auto '>
            <div className="lg:max-w-[1100px]  mx-auto mt-20 mb-32 ">
                <section className='flex flex-col items-center gap-12 '>
                    <h1 className='lg:border-l-[10px] lg:border-l-[#F09048] pl-5 text-3xl text-[#F09048] font-bold sm:text-center'>Quem faz parte do Ocupar?</h1>
                    <p className="text-2xl text-[#909090] lg:w-[40rem] sm:w-full sm:px-5 text-center">
                        Somos <span className="rounded-lg lg:bg-[#F09048] sm:text-[#F09048] lg:text-white p-2">estudantes e professores</span> de diferentes instituições de ensino do Brasil.
                    </p>
                    <motion.div
                        initial={{  opacity: 0, scale: 0  }}
                        whileInView={{opacity: 1, scale: 1 }}
                    >
                        <img src={College} className='sm:px-5' alt="Banner de faculdades" />
                    </motion.div>
                    <section>
                        <p className='text-2xl text-center text-[#F09048] font-bold'>Membros</p>
                        <section>
                            <motion.div className='flex lg:w-[85vw] sm:w-[95vw] my-20 overflow-x-hidden' ref={containerRef}
                                initial={{  opacity: 0, scale: 0  }}
                                whileInView={{opacity: 1, scale: 1 }}
                            >
                                <div className='flex gap-10'>
                                    {
                                        data.map((member, index) => (
                                            <div className='bg-black w-[240px] h-[240px] rounded-lg relative ' style={{backgroundImage: `url(${member.photo})`, backgroundSize: 'cover'}}>
                                                <div className="absolute bottom-2 left-0 right-0 p-4 text-white">
                                                    <h2 className="text-xl">{member.name.split(" ")[0] + " " + member.name.split(" ")[1] }</h2>
                                                    <p className='text-gray-200'>{member.course + " - " + member.college.split(" ")[0]}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        </section>
                    </section>
                    <p className='text-[#909090] text-2xl sm:text-center sm:w-full sm:px-5'>Professora Coordenadora Fábia Mônica Souza dos Santos</p>
                </section>
            </div>
            <div style={{backgroundImage: `url(${Background})`}} className="absolute inset-0 opacity-40 bg-no-repeat bg-cover z-[-1]" ></div>
        </div>
    )
}

export default Members;