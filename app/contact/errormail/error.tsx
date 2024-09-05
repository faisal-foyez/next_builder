'use client';

export default function ErrorMail ({
  error,
  reset
} : {
  error: Error & {digest?: string},
  reset: () => void
}) {
  

  return (
    <div>
      Error occured with message: <span>{error.message}</span>
      <button onClick={()=>reset()}>reset</button>
    </div>
  )
}

{/* <Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Layout>
        <Errorboundary fallback={<Error />}>
          <Page />
        </Errorboundary>
      </Layout>
    </ErrorBoundary>
  </Template>
</Layout> */}