import { useEffect, useState } from 'react'

import Head from 'next/head'

const AjaxPage = () => {
  const [lastDuration, setLastDuration] = useState(0)

  const output = `AJAX: ${lastDuration}`

  useEffect(() => {
    fetch('/api/get-data?duration=1000').then(resp => resp.json()).then(() => setLastDuration(1000))
    fetch('/api/get-data?duration=3000').then(resp => resp.json()).then(() => setLastDuration(3000))
    fetch('/api/get-data?duration=5000').then(resp => resp.json()).then(() => setLastDuration(5000))
    fetch('/api/get-data?duration=8000').then(resp => resp.json()).then(() => setLastDuration(8000))
  }, [])

  return (
    <div>
      <Head>
        <title>{output}</title>
        <meta property="og:title" content={`${output} | SPA SEO Test`} />
        <meta name="twitter:title" content={`${output} | SPA SEO Test`} />
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

export default AjaxPage
