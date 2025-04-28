import Link from 'next/link';
import styles from './dropdown.module.scss'

const Dropdown = ({content, status}) => {
    return (
        <div className={`${styles.dropdown} ${status ? styles.open : ''}`}>
            <div className={styles.dropdownList}>
                {
                    content && content?.length > 0 && content?.map(item => (
                        <Link href={item?.link} key={item?.id}>{item?.label}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Dropdown