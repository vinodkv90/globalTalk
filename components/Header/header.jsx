"use client"
import Link from 'next/link'
import styles from './header.module.scss'
import { useEffect } from 'react'
import { useHeader } from './useHeader'
import { useDevice } from '@/customHooks/useDevice'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import Auth from '../Auth'
import { useScroll } from '@/customHooks/useScroll'

const Header = () => {
  const { parsedData } = useHeader();
  const { isSmallScreen } = useDevice();
  const { scroll } = useScroll();
  return (
    <header className={`${styles.header} ${scroll ? styles.fix : null} ${isSmallScreen ? 'mobile' : 'desktop'}`}>
      <div className="container">
        <div className="row">
          { isSmallScreen && <MobileMenu data={parsedData} /> }
          <div className={`${styles.logo} ${isSmallScreen ? styles.smallScreen : null}`}>
            <Link href="/">GlobalTalk</Link>
          </div>
          <nav className={styles.menu}>
            { !isSmallScreen && <Menu data={parsedData} /> }
          </nav>
          <Auth />
        </div>
      </div>
    </header>
  )
}

export default Header