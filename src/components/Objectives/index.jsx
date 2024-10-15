import Background from '../../assets/asfalt--dark.png'
const Objectives = () => {
    return (
        <section className='flex flex-col gap-20 items-center  justify-center relative lg:h-screen sm:py-20 sm:auto'>
            <section className='flex flex-col items-center gap-10 '>
                <h1 className=' border-l-[10px] border-l-[#F09048] pl-5 text-3xl text-[#F09048] font-bold'>Nossa missão</h1>
                <p className='text-2xl text-center text-[#909090] w-[60rem] lg:max-w-[1100px] sm:w-full sm:px-5'>O Ocupar é um projeto construído por estudantes universitários com o propósito de democratizar o acesso à informação para que os estudantes de escola pública ocupem as universidades. </p>
            </section>
            <section>
                <ul className='flex lg:flex-row sm:flex-col gap-10 text-1xl text-[#F09048] font-extrabold'>
                    <li className="flex items-center justify-center border-8 border-[#F09048] rounded-full w-40 h-40 relative">
                        <span>OCUPAR</span>
                        <div className="flex items-center justify-center text-center text-white text-2xl font-bold absolute rounded-full left-[-10px] top-[-10px] h-14 w-14 bg-[#F09048]">1</div>
                    </li>
                    <li className="flex items-center justify-center border-8 border-[#F09048] rounded-full w-40 h-40 relative">
                        <span>INFORMAR</span>
                        <div className="flex items-center justify-center text-white text-2xl font-bold absolute rounded-full left-[-10px] top-[-10px] h-14 w-14 bg-[#F09048]">2</div>
                    </li>
                    <li className="flex items-center justify-center border-8 border-[#F09048] rounded-full w-40 h-40 relative">
                        <span>DIVERSIFICAR</span>
                        <div className="flex items-center justify-center text-white text-2xl font-bold absolute rounded-full left-[-10px] top-[-10px] h-14 w-14 bg-[#F09048]">3</div>
                    </li>
                    <li className="flex items-center justify-center border-8 border-[#F09048] rounded-full w-40 h-40 relative">
                        <span>DEMOCRATIZAR</span>
                        <div className="flex items-center justify-center text-white text-2xl font-bold absolute rounded-full left-[-10px] top-[-10px] h-14 w-14 bg-[#F09048]">4</div>
                    </li>
                </ul>
            </section>
            
            <div style={{backgroundImage: `url(${Background})`}} className="absolute inset-0  bg-no-repeat bg-cover z-[-1]" ></div>
        </section>
    )
}

export default Objectives;