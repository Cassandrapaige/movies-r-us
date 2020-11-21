import { useEffect, useState, useRef } from 'react'

const useObserver = (playAnimationIfVisible) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        let currentRef = domRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(playAnimationIfVisible) {
                    setIsVisible(entry.isIntersecting);
                }
                else if(!isVisible) {
                    setIsVisible(entry.isIntersecting);
                }
            })
        });
        observer.observe(currentRef);
        return () => observer.unobserve(currentRef);
    }, [isVisible, playAnimationIfVisible])

    return [isVisible, domRef];
}

export default useObserver;