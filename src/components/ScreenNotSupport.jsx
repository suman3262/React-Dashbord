import { Box, Typography } from '@mui/material'
import React from 'react'

const ScreenNotSupport = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'}>
      <Typography
        fontSize={'2rem'}
        fontWeight={'bold'}
        color={'blueviolet'}
        sx={{
          position: 'absolute',
          animation: 'moveLeftToRight 5s linear infinite',
          '@keyframes moveLeftToRight': {
            '0%': {
              transform: 'translateX(-100%)'
            },
            '100%': {
              transform: 'translateX(100%)'
            }
          }
        }}
      >
        Current screen size too small !!!
      </Typography>
    </Box>
  )
}

export default ScreenNotSupport;

