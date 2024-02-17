import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import TransitionWrapper from '../../Components/Transition'

const Footer = () => {
  const {t} = useTranslation();
  return (
    <TransitionWrapper>
                <Box color={'white'} background={'#282828'} as="footer" textAlign="center" py={4}>
        <Text fontSize={'sm'}>{t('12')}</Text>
        <Text fontSize={'sm'}>{t('13')}</Text>
                </Box>
    </TransitionWrapper>
  )
}

export default Footer
