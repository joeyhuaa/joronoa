import '@/styles/globals.css'
import '@/styles/main-menu.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { keyframes } from 'styled-components'
import { Suspense, useState, useEffect } from 'react'
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
    <AppContainer loading={loading}>
      <Suspense fallback={<AppLoading />}>
        {loading ? <AppLoading /> : (
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
          </>
        )}
      </Suspense>
    </AppContainer>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const AppContainer = styled.div`
  padding: 30px;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.loading ? 0 : 1)};
  animation: ${(props) => (props.loading ? fadeOut : fadeIn)} 0.5s ease-in-out;
`
const HoverText = styled.span`
  animation: fadeIn 0.6s ease-in-out;
`
const UnHoverText = styled.span`
  animation: fadeIn 0.6s ease-in-out;
`

