import Image from 'next/image'
import styles from './sectionImage.module.scss'

const SectionImage = ({src, alt, className}) => {
  return (
    <div className={`${styles.image} ${className || ''}`}>
        <Image src={src} alt={alt} fill />
    </div>
  )
}

export default SectionImage