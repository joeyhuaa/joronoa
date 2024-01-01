import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import AppLoading from './loading'
import frower from '../public/assets/frower.svg'
import LinkedSidebar from '@/components/LinkedSidebar'
import useMediaQuery from '@mui/material/useMediaQuery';

const pages = [
  'music',
  'code_projects', 
]
const links = {
  'youtube': 'https://www.youtube.com/@joronoa_music',
  'instagram': 'https://www.instagram.com/joronoa.music/',
  'github': 'https://github.com/joeyhuaa',
  'linkedin': 'https://www.linkedin.com/in/joeywhua/'
}

const Frower = () => (
  <Link href='/'>
    <Image src={frower} alt='' width='150' />
  </Link>
)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [section, setSection] = useState('')
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width:450px)')

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
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
          </Head>
          <div style={{display: 'flex'}}>
            {isMobile ? (
              <>
                <CollapsedMainMenu>

                </CollapsedMainMenu>
              </>
            ) : (
              <>
                <MainMenu>
                  <Frower />
                  <LinkedSidebar 
                    pages={pages}
                    links={links}
                    selected={section}
                  />
                </MainMenu>
              </>
            )}

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
  padding: 20px;
`
const MainMenu = styled.div`
  height: 90vh;
  border-right: solid 1px rgb(84, 84, 106);
  flex: 15%;
  padding-right: 50px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CollapsedMainMenu = styled.div`
  width: 0;
`


