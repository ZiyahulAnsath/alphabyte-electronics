import DesktopWorkstation from '@/components/Categories/DesktopWorkstation/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Workstations | Alphabyte Electronics",
  };

const DesktopWorkstationsPage = () => {
  return (
    <DefaultMainLayout>
        <DesktopWorkstation/>
    </DefaultMainLayout>
  )
}

export default DesktopWorkstationsPage