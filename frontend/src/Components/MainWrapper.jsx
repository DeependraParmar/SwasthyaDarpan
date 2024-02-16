import { Box } from '@chakra-ui/react'
import React from 'react'

const MainWrapper = ({pt, pb, children}) => {
  return (
    <Box width={['95%', '95%', '95%', '95%']} margin={'auto'} pt={pt} pb={pb}>
      {children}
    </Box>
  )
}

export default MainWrapper
