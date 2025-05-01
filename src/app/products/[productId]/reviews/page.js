
async function ReviewPage({ params }) {
  const productId = (await params).productId;
  return (
    <div>Hello From Review Page Product Id : { productId }</div>
  )
}

export default ReviewPage