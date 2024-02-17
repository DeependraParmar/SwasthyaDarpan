import React from 'react'
import TransitionWrapper from '../../Components/Transition'
import MainWrapper from '../../Components/MainWrapper'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <TransitionWrapper>
                <Box color={'white'} background={'#282828'} as="footer" textAlign="center" py={4}>
                      <Text fontSize={'sm'}>Swasthya Darpan © 2024. All rights reserved</Text>
                      <Text fontSize={'sm'}>Made with 💖 by Geeks.js</Text>
                </Box>
    </TransitionWrapper>
  )
}

export default Footer
