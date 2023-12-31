import '@/styles/globals.css'
import '@/styles/main-menu.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import AppLoading from './loading'

import LinkedSidebar from '@/components/LinkedSidebar'

const pages = [
  'music',
  // 'code_projects', 
]
const links = {
  'youtube': 'https://www.youtube.com/@joronoa_music',
  'instagram': 'https://www.instagram.com/joronoa.music/',
  'github': 'https://github.com/joeyhuaa',
  'linkedin': 'https://www.linkedin.com/in/joeywhua/'
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [section, setSection] = useState('')
  const [nameHovered, setNameHovered] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 1000); // Adjust the delay as needed
  }, []);

  useEffect(() => {
    const section = router.asPath.replace('/', '');
    setSection(section)
  }, [router.asPath])

  function handleClick(section: string) {
    setSection(section)
  }

  return (
    <>      
      {loading ? <AppLoading /> : (
        <AppContainer>
          <Head>
            <link href="https://fonts.googleapis.com/css?family=Tilt Prism" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ruwudu&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
          </Head>
          <div style={{display: 'flex'}}>
            <div id='main-menu'>
              <Link href='/' onClick={() => handleClick('')}>
                <h1 className='text-6xl/loose pl-5' onMouseEnter={() => setNameHovered(true)} onMouseLeave={() => setNameHovered(false)}>
                  {nameHovered ? <HoverText>joey 花</HoverText> : <UnHoverText>joronoa</UnHoverText>}
                </h1>
              </Link>
              <LinkedSidebar 
                pages={pages}
                links={links}
                selected={section}
              />
            </div>
            <div style={{flex: '75%'}}>
              <Component {...pageProps} />
            </div>
          </div>
        </AppContainer>
      )}
    </>
  )
}

const AppContainer = styled.div`
  padding: 30px;
`
const HoverText = styled.span`
  animation: fadeIn 0.6s ease-in-out;
`
const UnHoverText = styled.span`
  animation: fadeIn 0.6s ease-in-out;
`

