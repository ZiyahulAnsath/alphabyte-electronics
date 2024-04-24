import StorageAndNas from '@/components/Categories/Storage/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Storage | Alphabyte Electronics",
  };

const StoragePage = () => {
  return (
    <DefaultMainLayout>
        <StorageAndNas/>
    </DefaultMainLayout>
  )
}

export default StoragePage