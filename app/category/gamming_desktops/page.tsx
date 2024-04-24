import GammingDesktop from '@/components/Categories/GammingDesktop/page';
import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Categories Gamming Desktop | Alphabyte Electronics",
  };

const GammingDesktopsPage = () => {
  return (
    <DefaultMainLayout>
        <GammingDesktop/>
    </DefaultMainLayout>
  )
}

export default GammingDesktopsPage