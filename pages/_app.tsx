// import '@tailwind base'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

import AppLoading from './loading'
import MusicPlayer from '@/components/MusicPlayer'
import HoverText from '@/components/Hovertext'
import { COLORS } from '@/constants';

// const pages = [
//   'home',
//   'code_projects', 
//   'music',
// ]
// const links = {
//   'youtube': 'https://www.youtube.com/@joronoa_music',
//   'instagram': 'https://www.instagram.com/joronoa.music/',
//   'github': 'https://github.com/joeyhuaa',
//   'linkedin': 'https://www.linkedin.com/in/joeywhua/'
// }

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:450px)')
  const isHome = router.asPath === '/home'

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 1000); // Adjust the delay as needed
  }, []);

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
          <Content>
            <Header>
              {!isHome && (
                <BackHome style={{ marginLeft: isMobile ? '10px' : '50px'}} onClick={() => router.push('/home')}>
                  <ArrowBackIcon style={{marginRight:'2px'}} fontSize='small' />
                  <HoverText hoverText='回家' unhoverText='home' />
                </BackHome>
              )}
            </Header>
            <div style={{marginTop:'25px'}}>
              <Component {...pageProps} />
            </div>
          </Content>
          <MusicPlayer />
        </AppContainer>
      )}
    </>
  )
}

const AppContainer = styled.div`
  padding: 20px; 
`
const Content = styled.div`
  // border: solid red 1px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: auto;
`
const Header = styled.div`
  // border: solid red 1px;
  max-width: 600px;
  display: flex;
  position: fixed;
  top: 0;
  background-color: ${COLORS.spaceGray};
  width: 100%;
  height: 50px;
  // box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5); /* Apply a blurred border */
`
const BackHome = styled.button`
  // border: solid red 1px;
  margin: auto;
  display: flex;
  align-items: center;
  &:hover { color: pink };
`

