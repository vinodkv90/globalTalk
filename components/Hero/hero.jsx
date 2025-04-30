'use client'
import { useDevice } from '@/customHooks/useDevice';
import IcoMoon from '../IcoMoon';
import LinkButton from '../LinkButton';
import styles from './hero.module.scss'
import Content from './Content';
import Images from './Images';

const Hero = (data) => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <Content data={data} />
          <Images images={data?.images} />
        </div>
      </div>
    </section>
  )
}

export default Hero