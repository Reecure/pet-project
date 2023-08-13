import { useEffect } from 'react';

const useMouseWheelScroll = (ref: any) => {
    useEffect(() => {
        const handleMouseWheel = (e: any) => {
            const container = ref.current;

            if (container) {
                container.scrollLeft += e.deltaY;
            }
        };

        if (ref && ref.current) {
            ref.current.addEventListener('wheel', handleMouseWheel);
        }

        return () => {
            if (ref && ref.current) {
                ref.current.removeEventListener('wheel', handleMouseWheel);
            }
        };
    }, [ref]);
};

export default useMouseWheelScroll;
