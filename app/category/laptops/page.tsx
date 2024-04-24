import Laptop from '@/components/Categories/Laptop/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Laptop | Alphabyte Electronics",
  };


const LaptopPage = () => {
  return (
    <DefaultMainLayout>
        <Laptop/>
    </DefaultMainLayout>
  )
}

export default LaptopPage