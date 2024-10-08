import Outline from '../../assets/outline.svg';
import Banner from '../../assets/banner.png';
import Circle from '../../assets/circle.svg';
import Background from '../../assets/bg.png'

const Header = () => {
    return (
        <header style={{backgroundImage: `url(${Background})`}} className="flex flex-col relative items-center lg:justify-around  sm:justify-center gap-15 bg-cover h-screen">
            <section className='flex flex-col items-center gap-5 lg:max-w-[1100px] sm:w-full sm:px-5 lg:mx-auto  '>
                <p className='lg:text-2xl lg:w-[40rem] sm:text-[1.6em] sm:w-full text-center text-[#3a3a3a] font-medium'>
                    Na luta para que os estudantes do ensino público <span className="text-[#F09048] font-bold">Ocupem</span> os espaços universitários
                </p>
                <img src={Outline} alt=""  className='w-[35rem]'/>
            </section>
            <section className='w-[90vw] lg:max-w-[1100px] lg:mx-auto sm:w-full sm:mt-5 '>
                <img src={Banner} alt="banner" className='w-full h-[15rem] object-cover lg:rounded-xl'/>
            </section>
        </header>
    )
}

export default Header;