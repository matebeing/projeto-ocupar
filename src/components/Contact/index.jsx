import Sticker from '../../assets/sticker.svg';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id='contato' className="bg-[#F09048] h-[25em]">
            <div className="flex lg:flex-row sm:flex-col items-center justify-around h-full lg:max-w-[1100px] sm:w-full sm:px-5 sm:py-10 lg:mx-auto">
                 <img src={Sticker} className='lg:w-[15em] sm:w-[10em]' />
                <div>
                    <p className='text-[2rem] font-bold text-[#1d0a08] lg:text-start sm:text-center'>Entre em contato conosco!</p>
                    <ul className='lg:text-start sm:text-center flex flex-col gap-2 my-5 font-semibold'>
                        <li className='flex items-center gap-2 uppercase'><FaEnvelope size={30}/> projetosocialocupar@gmail.com</li>
                        <li className='flex items-center gap-2 uppercase'><FaInstagram size={30}/> @projetosocial.ocupar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;