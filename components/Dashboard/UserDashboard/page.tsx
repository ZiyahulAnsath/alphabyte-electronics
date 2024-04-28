import CardDataStats from '@/components/CardDataStats'
import ChartOne from '@/components/Charts/ChartOne'
import React from 'react'
import { HiOutlineEye } from 'react-icons/hi2'

const UserDashboard = () => {
  return (
    <>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Orders" total="$3.456K" rate="0.43%" levelUp>
          <HiOutlineEye className="w-6 h-6  text-primary dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Add To Cart" total="$3.456K" rate="0.43%" levelUp>
          <HiOutlineEye className="w-6 h-6  text-primary dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Whish List" total="$3.456K" rate="0.43%" levelUp>
          <HiOutlineEye className="w-6 h-6  text-primary dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Earn Stars" total="$3.456K" rate="0.43%" levelUp>
          <HiOutlineEye className="w-6 h-6  text-primary dark:text-white" />
        </CardDataStats>
       
        
      </div>
    </>
  )
}

export default UserDashboard