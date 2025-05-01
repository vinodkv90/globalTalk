"use client"
import Link from 'next/link'
import styles from './header.module.scss'
import { useHeader } from './useHeader'
import { useDevice } from '@/customHooks/useDevice'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import { useScroll } from '@/customHooks/useScroll'
import UserChip from './UserChip'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const { parsedData } = useHeader();
  const { isSmallScreen } = useDevice();
  const { scroll } = useScroll();
  return (
    <header className={`${styles.header} ${scroll ? styles.fix : null} ${isSmallScreen ? 'mobile' : 'desktop'}`}>
      <div className="container">
        <div className="row">
          { isSmallScreen && pathname !== '/authentication' && <MobileMenu data={parsedData} /> }
          <div className={`${styles.logo} ${isSmallScreen ? styles.smallScreen : null}`}>
            <Link href="/">GlobalTalk</Link>
          </div>
          { !isSmallScreen && pathname !== '/authentication' && <nav className={styles.menu}><Menu data={parsedData} /></nav> }
          <UserChip />
        </div>
      </div>
    </header>
  )
}

export default Header