import Product from '@/components/Categories/Product/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Laptop | Alphabyte Electronics",
  };


const LaptopPage = () => {
  return (
    <DefaultMainLayout>
       <Product/>
    </DefaultMainLayout>
  )
}

export default LaptopPage