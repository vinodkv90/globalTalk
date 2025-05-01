'use client'
import { useContext, useEffect, useState } from 'react'
import Tabs from '../Tabs'
import styles from './auth.module.scss'
import Login from './Login'
import Register from './Register'
import { redirect } from 'next/navigation'
import { Token } from '../Context/context'

const Auth = () => {
  const [activeItem, setActiveItem] = useState(tab[0])
  const { token } = useContext(Token)
  useEffect(() => {
    if(token) {
      redirect('/')
    }
  }, [])
  
  return (
    <section className={`full-height ${styles.auth}`}>
      <div className="container">
        <div className={styles.authWrap}>
          <Tabs items={tab} getActive={setActiveItem} />
          {activeItem.id === 1 ? <Login /> : <Register />}
        </div>
      </div>
    </section>
  )
}

export default Auth

const tab = [
  {
    id: 1,
    label: 'login'
  },
  {
    id: 2,
    label: 'register'
  }
]