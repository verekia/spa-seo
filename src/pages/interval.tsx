import { useEffect, useState } from 'react'

import Head from 'next/head'

const IntervalPage = () => {
  const [counter, setCounter] = useState(0)

  const output = `Counter: ${counter}`

  useEffect(() => {
    setInterval(() => setCounter((x) => x + 1), 1000)
  }, [])

  return (
    <div>
      <Head>
        <title>{output}</title>
        <meta property="og:title" content={output} />
        <meta name="twitter:title" content={output} />
      </Head>
      Content is - {output} - End of content
    </div>
  )
}

export default IntervalPage
