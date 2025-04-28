"use client"
import Button from '@/components/Button'
import styles from './mobileMenu.module.scss'
import Link from 'next/link'
import IcoMoon from '@/components/IcoMoon'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import useToggle from '@/customHooks/useToggle'

const MobileMenu = ({data}) => {
  const { status, toggle, setFalse } = useToggle()
  const pathname = usePathname()
  return (
    <>
      <Button curved={false} className={`${styles.menuBtn} ${status ? styles.open : null}`} onClick={toggle}>
        {/* <IcoMoon icon="hamburger" size={24} color="currentColor" /> */}
        <span className={`${styles.bar} ${styles.bar_1}`} />
        <span className={`${styles.bar} ${styles.bar_2}`} />
        <span className={`${styles.bar} ${styles.bar_3}`} />
        <span className={`${styles.bar} ${styles.bar_4}`} />
        <span className={`${styles.bar} ${styles.bar_5}`} />
      </Button>
      <div className={`${styles.overlay} ${status ? styles.open : null}`} onClick={setFalse} />
      <AnimatePresence>
        {
          status && <motion.aside 
            className={`${styles.sideBar} ${status ? styles.open : null}`}
            initial={{
              x: -400
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: -360
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0,
            }}
          >
            <div className="container">
              <ul className={styles.menuList}>
                {
                  data && data?.length > 0 && data?.map((item, index) => (
                    <motion.li 
                      key={item?.id} 
                      initial={{
                        x: -30, 
                        opacity: 0
                      }} 
                      animate={{
                        x: 0, 
                        opacity: 1
                      }}
                      exit={{
                        x: -30, 
                        opacity: 0
                      }}
                      transition={{
                        type: "spring",
                        duration: 0.7,
                        delay: index*0.1,
                        bounce: 0,
                      }}
                    >
                      <Link href={item?.link} className={`${pathname === item?.link ? styles.active : ''}`}>{item?.label}</Link>
                    </motion.li>
                  ))
                }
              </ul>
            </div>
          </motion.aside>
        }
      </AnimatePresence>
    </>
  )
}

export default MobileMenu