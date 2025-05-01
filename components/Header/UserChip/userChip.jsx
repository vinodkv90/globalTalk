import Button from '@/components/Button'
import styles from './useChip.module.scss'
import { useChip } from './useChip'
import { usePathname } from 'next/navigation'
import LinkButton from '@/components/LinkButton'
import { useContext } from 'react'
import { Token, User } from '@/components/Context/context'

const UserChip = () => {
  const pathname = usePathname();
  const { token, user, signOut } = useChip()

  return (
    // (pathname !== '/authentication' && )
    token ? <div className={styles.userChip}>
        <div className={styles.userChipWrap}>
            <div className={styles.icon}>{user.slice(0,1)}</div>
            <div className={styles.name}>{user}</div>
        </div>
        <Button size='md' className={styles.logoutBtn} onClick={signOut}>Sign Out</Button>
    </div> : <LinkButton href={'/authentication'} variant='primary' curved={false}>Login</LinkButton>
  )
}

export default UserChip