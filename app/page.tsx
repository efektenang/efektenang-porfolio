import Image from 'next/image'
import TopCard from './components/TopCard'
import BarCharts from './components/BarCharts'
import RecentOrders from './components/RecentOrders'

export default function Home() {
  return (
    <>
      <TopCard />
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-4'>
        <BarCharts />
        <RecentOrders />
      </div>
    </>
  )
}
