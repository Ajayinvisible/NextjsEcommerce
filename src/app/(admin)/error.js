'use client';

function ErrorLayout({error}) {
  return (
      <div class="text-2xl text-center">{ error.message }</div>
  )
}

export default ErrorLayout