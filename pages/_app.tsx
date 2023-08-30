import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import LinkedSidebar from '@/components/LinkedSidebar'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [section, setSection] = useState('summary')

  function handleClick(section: string) {
    setSection(section)
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Tilt Prism" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ruwudu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      </Head>
      <div style={{display: 'flex'}}>
        <div style={{flex: '30%'}}>
          <h1 className='text-6xl/loose pl-5'>joey hua</h1>
          <LinkedSidebar 
            sections={['about', 'projects', 'resume', 'music blog']}
            handleClick={section => handleClick(section)}
            selected={section}
          />
        </div>
        <div style={{flex: '70%'}}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
