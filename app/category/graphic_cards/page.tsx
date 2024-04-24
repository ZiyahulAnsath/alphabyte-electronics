import GraphicsCard from '@/components/Categories/GraphicsCard/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Categories GraphicsCard | Alphabyte Electronics",
  };

const GraphicsCardPage = () => {
  return (
    <DefaultMainLayout>
        <GraphicsCard/>
    </DefaultMainLayout>
  )
}

export default GraphicsCardPage