"use client"
import { useDevice } from '@/customHooks/useDevice'
import LinkButton from '../LinkButton'
import SectionImage from '../SectionImage'
import styles from './vocabulary.module.scss'

const Vocabulary = (data) => {
  const { isMobile} = useDevice()
  return (
    <section className={styles.vocabularySection}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={styles.vocabularyContent}>
              {data?.title && <h4 className={`title ${styles.title}`}>{data?.title}</h4>}
              {data?.description && <p className={`description ${styles.description}`}>{data?.description}</p>}
              {data?.link && <LinkButton href={data?.link} variant='primary' size='md'>{data?.link_text}</LinkButton>}
            </div>
          </div>
          <div className="col-6">
            {
              data?.image && <SectionImage 
                src={isMobile ? data?.mobImage : data?.image} 
                alt={data?.alt} 
                className={styles.image}
              />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vocabulary