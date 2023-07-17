import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '@/store/slices/appSlice'

export default function Home() {
  // https://redux-toolkit.js.org/tutorials/quick-start
  const appReducer = useSelector((state) => state.appReducer)
  const dispath = useDispatch()
  return (
    <div>
      <button onClick={()=>dispath(remove())}>-</button>
      <div>Counter: {appReducer.count1}</div>
      <button onClick={()=>dispath(add())}>+</button>
    </div>
  )
}
