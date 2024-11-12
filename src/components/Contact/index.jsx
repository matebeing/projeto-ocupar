import Sticker from '../../assets/sticker.svg';

const Contact = () => {
    return (
        <div id='contato' className="bg-[#F09048] h-[25em]">
            <div className="flex lg:flex-row sm:flex-col items-center justify-around h-full lg:max-w-[1100px] sm:w-full sm:px-5 sm:py-10 lg:mx-auto">
                 <img src={Sticker} className='lg:w-[15em] sm:w-[10em]' />
                <div>
                    <p className='text-[2rem] font-bold text-[#1d0a08] sm:text-center'>Entre em contato conosco!</p>
                    <ul className='sm:text-center '>
                        <li>Email projetosocialocupar@gmail.com</li>
                        <li>Instagram: @projetosocial.ocupar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;