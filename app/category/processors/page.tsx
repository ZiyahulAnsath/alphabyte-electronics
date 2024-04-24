import Processors from '@/components/Categories/Processors/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Processors | Alphabyte Electronics",
  };

const ProcessorsPage = () => {
  return (
    <DefaultMainLayout>
        <Processors/>
    </DefaultMainLayout>
  )
}
export default ProcessorsPage;