import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="flex items-center fixed bottom-5 cursor-pointer right-5 w-10 h-10  bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-opacity duration-300 ease-in-out z-20"
                >
                    ↑
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
