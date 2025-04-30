"use client"
import { useEffect, useRef, useState } from 'react';
import Button from '../Button'
import styles from './tab.module.scss'

const Tabs = ({items = [], getActive}) => {
  const itemRefs = useRef([]);
  const activeTab = useRef(0);
  const [active, setActive] = useState(items[0]);
  useEffect(() => {
    itemRefs.current.forEach((ref, index) => {
      if(index === 0) {
        activeTab.current.style.width = `${ref.offsetWidth}px`;
        activeTab.current.style.left = `${ref.offsetLeft}px`;
      }
    })
  }, [items]);

  const handleClick = (e, item) => {
    activeTab.current.style.left = `${e.target.offsetLeft}px`;
    activeTab.current.style.width = `${e.target.clientWidth}px`;
    setActive(item);
    getActive(item)
  }

  return (
    <div className={styles.tab}>
      <div className={styles.tabHead}>
        <Button variant='primary' size='sm' curved={false} className={styles.activeTab} ref={activeTab} />
        {
          items.map((item, index) => {
            return (
              <div 
                key={item?.id} 
                className={`${styles.tabItem} ${item?.id === active.id ? styles.active : ''}`} 
                ref={el => itemRefs.current[index] = el}
                onClick={(e) => handleClick(e, item)}
              >
                {item?.label}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tabs