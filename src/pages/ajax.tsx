import { useEffect, useState } from 'react'

import Head from 'next/head'

const AjaxPage = () => {
  const [lastDuration, setLastDuration] = useState(0)

  const output = `AJAX: ${lastDuration}`

  const ajaxSequence = async () => {
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(2000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(4000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(6000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(8000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(10000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(12000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(14000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(16000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(18000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(20000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(22000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(24000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(26000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(28000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(30000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(32000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(34000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(36000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(38000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(40000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(42000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(44000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(46000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(48000))
    await fetch('/api/get-data?duration=2000')
      .then((resp) => resp.json())
      .then(() => setLastDuration(50000))
  }

  useEffect(() => {
    ajaxSequence()
  }, [])

  return (
    <div>
      <Head>
        <title>{output} | SPA SEO Test </title>
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
