import LinkButton from '../LinkButton'
import SectionImage from '../SectionImage'
import styles from './statistics.module.scss'

const Statistics = (data) => {
  return (
    <section className={styles.statisticsSection}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SectionImage src={data?.image} alt={data?.alt} />
          </div>
          <div className="col-6">
            <div className={styles.content}>
              {data?.title && <h5 className={`title ${styles.title}`}>{data?.title}</h5>}
              {data?.description && <p className={`description ${styles.description}`}>{data?.description}</p>}
              {data?.link && <LinkButton href={data?.link} variant='primary' size='md'>{data?.link_text}</LinkButton>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics