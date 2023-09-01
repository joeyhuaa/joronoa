import '@/styles/globals.css'
import '@/styles/main-menu.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import LinkedSidebar from '@/components/LinkedSidebar'


export default function App({ Component, pageProps }: AppProps) {
  const [section, setSection] = useState('')
  const router = useRouter();

  useEffect(() => {
    const section = router.asPath.replace('/', '');
    setSection(section)
  }, [router.asPath])

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
        <div id='main-menu'>
          <Link href='/' onClick={() => handleClick('')}>
            <h1 className='text-6xl/loose pl-5'>joey hua</h1>
          </Link>
          <LinkedSidebar 
            sections={['about', 'projects', 'music']}
            selected={section}
          />
        </div>
        <div style={{flex: '75%', padding: '30px'}}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
