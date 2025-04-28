import { useEffect, useState } from "react"

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    const handleResize = () => {
        if(typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768)
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1025)
            setIsDesktop(window.innerWidth >= 1025)
            setIsSmallScreen(window.innerWidth < 1025)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return {
        isMobile,
        isTablet,
        isDesktop,
        isSmallScreen
    }
}