// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { store } from '@/store/store'
import { useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const appReducer = useSelector((state) => state.appReducer)
  return (
    <div>Index: {appReducer.count1}</div>
  )
}
