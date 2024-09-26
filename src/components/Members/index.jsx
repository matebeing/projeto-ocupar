import { useState, useEffect, useRef } from 'react';
import College from '../../assets/colleges.png'
import Background from '../../assets/asfalt--dark.png'

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
        <div className='flex flex-col gap-20 items-center justify-center mt-20 relative h-auto '>
            <div className="max-w-[1100px] mx-auto mt-20 mb-56 ">
                <section className='flex flex-col items-center gap-12'>
                    <h1 className='border-l-[10px] border-l-[#F09048] pl-5 text-3xl text-[#F09048] font-bold'>Quem faz parte do Ocupar?</h1>
                    <p className="text-2xl text-[#909090] w-[40rem] text-center">
                        Somos <span className="rounded-lg bg-[#F09048] text-white p-2">estudantes e professores</span> de diferentes instituições de ensino do Brasil.
                    </p>
                    <img src={College} alt="Banner de faculdades" />
                    <section>
                        <p className='text-2xl text-center text-[#909090] font-bold'>Membros</p>
                        <section>
                            <div className='flex w-[85vw] my-20 overflow-x-hidden' ref={containerRef}>
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
                            </div>
                        </section>
                    </section>
                    <p className='text-[#909090] text-2xl'>Professora Coordenadora Fábia Mônica Souza dos Santos</p>
                </section>
            </div>
            <div style={{backgroundImage: `url(${Background})`}} className="absolute inset-0 opacity-40 bg-no-repeat bg-cover z-[-1]" ></div>
        </div>
    )
}

export default Members;