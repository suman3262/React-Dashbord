import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import Pichart from '../../components/PiChart'
const Pie = () => {
  return (
    <Box margin={'20px'}>
        <Header/>
        <Box height={'75vh'}>
         <Pichart/>
        </Box>
    </Box>
  )
}

export default Pie