import { useEffect, useState } from 'react';

export const useOuterWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.outerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};
