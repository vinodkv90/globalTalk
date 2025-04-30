import { useDevice } from '@/customHooks/useDevice'
import styles from './images.module.scss'
import Image from 'next/image'

const Images = ({images}) => {
  const { isMobile } = useDevice();
  return (
    <div className="col-6">
      <div className={styles.images}>
        {
          images && images?.length > 0 && images.map(item => {
            return (
              <div key={item?.id} className={`${styles.image} image_${item?.id}`}>
                <Image src={isMobile ? item?.mobSrc : item?.src} alt={item?.alt} fill />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Images