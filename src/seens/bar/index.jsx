import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'
const Bar = () => {
  return (
    <Box margin={'20px'} >
      <Header title={'BAR CHART'} subtitle={'A bar chart data'}/>
      <Box height={'75vh'}>
         <BarChart/>
      </Box>
    </Box>
  )
}

export default Bar