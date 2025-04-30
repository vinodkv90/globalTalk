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
import LinkButton from '../LinkButton'
import { usePathname } from 'next/navigation'
import UserChip from './UserChip'

const Header = () => {
  const { parsedData, token, user } = useHeader();
  const { isSmallScreen } = useDevice();
  const { scroll } = useScroll();
  const pathname = usePathname();
  return (
    <header className={`${styles.header} ${scroll ? styles.fix : null} ${isSmallScreen ? 'mobile' : 'desktop'}`}>
      <div className="container">
        <div className="row">
          { isSmallScreen && pathname !== '/authentication' && <MobileMenu data={parsedData} /> }
          <div className={`${styles.logo} ${isSmallScreen ? styles.smallScreen : null}`}>
            <Link href="/">GlobalTalk</Link>
          </div>
          { !isSmallScreen && pathname !== '/authentication' && <nav className={styles.menu}><Menu data={parsedData} /></nav> }
          {console.log('user',token)}
          {
            (pathname !== '/authentication' && token) 
            ? <UserChip user={user} />
            : <LinkButton href={'/authentication'} variant='primary' curved={false}>Login</LinkButton>
          }
        </div>
      </div>
    </header>
  )
}

export default Header