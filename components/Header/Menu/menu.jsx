import Link from 'next/link'
import styles from './menu.module.scss'
import { usePathname } from 'next/navigation'
import Dropdown from './Dropdown';
import { useState } from 'react';
import useToggle from '@/customHooks/useToggle';

const Menu = ({data}) => {
  const pathname = usePathname()
  const { status, toggle, setFalse, setTrue } = useToggle()
  return (
    <ul className={styles.menuList}>
      {
        data && data?.length > 0 && data?.map((item) => (
          item?.children && item?.children?.length > 0 ? <li key={item?.id} onMouseEnter={setTrue} onMouseLeave={setFalse}>
            <Link href={item?.link} className={`${pathname === item?.link ? styles.active : ''}`}>{item?.label}</Link>
            <Dropdown content={item?.children} status={status} />
          </li> : <li key={item?.id}>
            <Link href={item?.link} className={`${pathname === item?.link ? styles.active : ''}`}>
              {item?.label}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu