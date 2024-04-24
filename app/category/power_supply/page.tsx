import PowerSupply from '@/components/Categories/PowerSupply/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Ppower Supply | Alphabyte Electronics",
  };

const PowerSupplyPage = () => {
  return (
    <DefaultMainLayout>
        <PowerSupply/>
    </DefaultMainLayout>
  )
}

export default PowerSupplyPage