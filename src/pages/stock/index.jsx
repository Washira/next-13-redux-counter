import React from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '@/store/slices/appSlice'
import styles from './stock.module.css'

const Stock = () => {
  const appReducer = useSelector((state) => state.appReducer)
  const dispath = useDispatch()
  return (
    <div>
      <nav>
        <Link href="/" className={styles.btn}>Root</Link>
      </nav>
      <hr />
      <button onClick={()=>dispath(remove())}>-</button>
      <div>Counter: {appReducer.count1}</div>
      <button onClick={()=>dispath(add())}>+</button>
    </div>
  )
}

export default Stock