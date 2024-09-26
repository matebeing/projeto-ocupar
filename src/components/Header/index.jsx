import Outline from '../../assets/outline.svg';
import Banner from '../../assets/banner.png';
import Circle from '../../assets/circle.svg';
import Background from '../../assets/bg.png'

const Header = () => {
    return (
        <header style={{backgroundImage: `url(${Background})`}} className="flex flex-col relative items-center justify-around gap-15 bg-cover h-screen">
            <section className='flex flex-col items-center gap-5 max-w-[1100px] mx-auto'>
                <p className='text-2xl w-[40rem] text-center text-[#3a3a3a] font-medium'>
                    Na luta para que os estudantes do ensino público <span className="text-[#F09048] font-bold">Ocupem</span> os espaços universitários
                </p>
                <img src={Outline} alt=""  className='w-[35rem]'/>
            </section>
            <section className='w-[90vw] max-w-[1100px] mx-auto'>
                <img src={Banner} alt="banner" className='w-full h-[15rem] object-cover rounded-xl'/>
            </section>
        </header>
    )
}

export default Header;