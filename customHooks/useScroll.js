import { useEffect, useState } from "react"

export const useScroll = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const handleScroll = (e) => {
            if(typeof window !== 'undefined') {
                if(window.scrollY > 0) {
                    setScroll(true)
                } else {
                    setScroll(false)
                }
            }
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scroll }
    
}