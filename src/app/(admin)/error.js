'use client';

function ErrorLayout({error}) {
  return (
      <div className="text-2xl text-center">{ error.message }</div>
  )
}

export default ErrorLayout