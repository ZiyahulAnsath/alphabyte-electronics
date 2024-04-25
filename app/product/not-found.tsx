import DefaultMainLayout from '@/components/Layouts/DefaultMainLayout/page'
import ProductNotFound from '@/components/NotFound/ProductNotFound/page'
import React from 'react'

const NotFound = () => {
  return (
    <DefaultMainLayout>
        <ProductNotFound/>
    </DefaultMainLayout>
  )
}

export default NotFound