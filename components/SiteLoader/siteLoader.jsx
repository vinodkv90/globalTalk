"use client"
import { useContext, useEffect, useState } from 'react'
import styles from './siteLoader.module.scss'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { Loader } from '../Context/context'

const SiteLoader = () => {
    const { loading, setLoading } = useContext(Loader)
    const pathname = usePathname()
    useEffect(() => {
        const scpace = window.innerWidth - document.body.clientWidth;
        const handleLoad = () => {
            setTimeout(() => {
                document.body.classList.add('loaded')
                setLoading(false)
            }, 3000)
            console.log('Site fully loaded')
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => window.removeEventListener('load', handleLoad)
    }, [])
    return (
        <AnimatePresence>
            {
                loading && <motion.div 
                    className={styles.loader}
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: loading ? 1 : 0
                    }}
                    exit={{
                        opacity: 0
                    }}
                >
                    <div className={styles.logo}>
                        GlobalTalk
                        <motion.div 
                            className={styles.logoLoader}
                            initial={{
                                clipPath: 'rect(0 0 100% 0px)'
                            }}
                            animate={{
                                clipPath:'rect(0 100% 100% 0px)'
                            }}
                            transition={{
                                duration: 2.7
                            }}
                        >
                            GlobalTalk
                        </motion.div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default SiteLoader