import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import GeoChart from '../../components/GeoChart'

const Geo = () => {
  return (
    <>
        <Box margin={'20px'}>
            <Header title={"GEO CHART"} />

            <Box height={'70vh'}>
                <GeoChart/>
            </Box>
        </Box>
    </>
  )
}

export default Geo