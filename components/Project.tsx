import styled from 'styled-components'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Project({
  imgSrc,
  description,
}) {
  const isMobile = useMediaQuery('(max-width:450px)')

  return (
    <div style={{
      width: '100%',
      marginBottom: '70px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
    }}>
      <Image 
        style={{marginBottom: isMobile ? '30px' : 0}}
        src={imgSrc}
        alt={imgSrc}
        width={isMobile ? 300 : 200}
        height={300}
      />
      <Description>
        {description}
      </Description>
    </div>
  )
}

const Description = styled.p`
  margin-left: 30px;
`