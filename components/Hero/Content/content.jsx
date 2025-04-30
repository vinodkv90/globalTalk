import LinkButton from '@/components/LinkButton'
import styles from './content.module.scss'
import IcoMoon from '@/components/IcoMoon'
import { useDevice } from '@/customHooks/useDevice';

const Content = ({data}) => {
  const { isMobile, isTablet, isDesktop, isSmallScreen } = useDevice()
  return (
    <div className="col-6">
      <div className={styles.content}>
        {data?.text && <h1 className={`text ${styles.text}`}>{data?.text}</h1>}
        {
          data?.title && <h2 className={`title ${styles.title}`}>
            {data?.title?.line_1 && <span>{data?.title?.line_1}</span>}
            {data?.title?.line_2 && <span>{data?.title?.line_2}</span>}
            {data?.title?.line_3 && <span>{data?.title?.line_3}</span>}
          </h2>
        }
        {data?.description && <p className={`description ${styles.description}`}>{data?.description}</p>}
        {data?.link && <LinkButton href={data?.link} variant='primary' size='md'>{data?.link_text}</LinkButton>}
        <div className={styles.features}>
          {
            data?.points && data?.points?.length > 0 && data?.points?.map((item) => {
              return <div key={item?.id} className={styles.feature}>
                <IcoMoon icon={item?.icon} size={isMobile ? 16 : isTablet ? 24 : isDesktop ? 30 : 30} className={styles.icon} />
                <span className={styles.count}>{item?.count}<span className={styles.plus}>+</span></span>
                <p className={styles.featureLabel}>{item?.label}</p>
              </div>
            })
          }
        </div>
      </div>
  </div>
  )
}

export default Content