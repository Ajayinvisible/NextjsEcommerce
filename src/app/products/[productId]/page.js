import React from 'react'

async function ProductByID({ params }) {
    const productId = ( await params ).productId
  return (
    <div>Hello From ProductsByID : { productId }</div>
  )
}

export default ProductByID