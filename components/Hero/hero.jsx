import styles from './hero.module.scss'

const Hero = (data) => {
  console.log('data', data);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6">
              <div className={styles.content}>
                <h1 className={`text ${styles.text}`}>{data?.text}</h1>
                <h2 className={`title ${styles.title}`}>
                  <span>{data?.title?.line_1}</span>
                  <span>{data?.title?.line_2}</span>
                  <span>{data?.title?.line_3}</span>
                </h2>
              </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero