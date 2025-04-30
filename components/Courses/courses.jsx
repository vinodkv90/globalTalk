import Image from 'next/image'
import SectionImage from '../SectionImage'
import styles from './courses.module.scss'

const Courses = (data) => {
  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            {data?.image && <SectionImage src={data?.image} alt={data?.alt} />}
          </div>
          <div className="col-6">
            <div className={styles.courses}>
              {data?.title && <h2 className={`title ${styles.title}`}>{data?.title}</h2>}
              {data?.description && <p className={`description ${styles.description}`}>{data?.description}</p>}
              <div className={styles.coursesWrap}>
                {data?.options && data?.options?.length > 0 && data?.options?.map(item => (
                  <div className={`${styles.course} ${item?.type}`} key={item?.id} style={{
                    background: item?.color
                  }}>
                    <div className={styles.image}>
                      <Image src={item?.image} alt={item?.alt} fill />
                    </div>
                    {item?.label && <h3>{item?.label}</h3>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses