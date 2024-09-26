import Background from '../../assets/asfalt--dark.png'
const Objectives = () => {
    return (
        <main className='flex flex-col gap-20 items-center  justify-center relative h-screen'>
            <section className='flex flex-col items-center gap-10'>
                <h1 className=' border-l-[10px] border-l-[#F09048] pl-5 text-3xl text-[#F09048] font-bold'>Nossa missão</h1>
                <p className='text-2xl text-center text-[#909090] w-[60rem]'>O Ocupar é um projeto construído por estudantes universitários com o propósito de democratizar o acesso à informação para que os estudantes de escola pública ocupem as universidades. </p>
            </section>
            <section>
                <ul className='flex gap-10 text-lg text-[#F09048] font-extrabold'>
                    <li className='flex items-center justify-center border-[10px] p-20 border-[#F09048] w-40 h-40 rounded-full'>OCUPAR</li>
                    <li className='flex items-center justify-center border-[10px] p-20 border-[#F09048] w-40 h-40 rounded-full'>INFORMAR</li>
                    <li className='flex items-center justify-center border-[10px] p-20 border-[#F09048] w-40 h-40 rounded-full'>DIVERSIFICAR</li>
                    <li className='flex items-center justify-center border-[10px] p-20 border-[#F09048] w-40 h-40 rounded-full'>DEMOCRATIZAR</li>
                </ul>
            </section>
            <div style={{backgroundImage: `url(${Background})`}} className="absolute inset-0  bg-no-repeat bg-cover z-[-1]" ></div>
        </main>
    )
}

export default Objectives;