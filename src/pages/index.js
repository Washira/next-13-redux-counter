import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '@/store/slices/appSlice'
import Link from 'next/link';
import styles from './index.module.css'

export default function Home() {
  // https://redux-toolkit.js.org/tutorials/quick-start
  const appReducer = useSelector((state) => state.appReducer)
  const dispath = useDispatch()
  return (
    <div>
      <nav>
        <Link href="/stock" className={styles.btn}>Stock</Link>
      </nav>
      <button onClick={()=>dispath(remove())}>-</button>
      <div>Counter: {appReducer.count1}</div>
      <button onClick={()=>dispath(add())}>+</button>
    </div>
  )
}
