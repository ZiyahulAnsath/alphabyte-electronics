import Motherboard from '@/components/Categories/Motherboards/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Motherboards | Alphabyte Electronics",
  };

const MotherboardsPage = () => {
  return (
    <DefaultMainLayout>
        <Motherboard/>
    </DefaultMainLayout>
  )
}

export default MotherboardsPage