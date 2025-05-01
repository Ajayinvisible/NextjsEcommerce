async function ReviewPage({ params }) {
    const { productId, reviewId } = await params;
  return (
      <div>Hello From Review Page With Product ID : { productId } Review ID : { reviewId }</div>
  )
}

export default ReviewPage