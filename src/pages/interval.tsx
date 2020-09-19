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
        <title>{output} | SPA SEO Test </title>
        <meta property="og:title" content={`${output} | SPA SEO Test`} />
        <meta name="twitter:title" content={`${output} | SPA SEO Test`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@verekia" />
        <meta
          name="twitter:description"
          content="This is just a dummy description, check the title."
        />
        <meta
          name="twitter:image"
          content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
        />
        <meta
          name="description"
          content={`${output} Some great description to make search engines happy`}
        />
      </Head>
      <h1>SPA SEO Test</h1>
      <p>Content is - {output} - End of content</p>
    </div>
  )
}

export default IntervalPage
