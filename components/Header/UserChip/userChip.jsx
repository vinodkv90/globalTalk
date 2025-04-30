import Button from '@/components/Button'
import styles from './useChip.module.scss'
import { useChip } from './useChip'

const UserChip = ({user}) => {
    const { signOut } = useChip()
  return (
    <div className={styles.userChip}>
        <div className={styles.userChipWrap}>
            <div className={styles.icon}>{user.slice(0,1)}</div>
            <div className={styles.name}>{user}</div>
        </div>
        <Button size='md' className={styles.logoutBtn} onClick={signOut}>Sign Out</Button>
    </div>
  )
}

export default UserChip