import React from 'react'
import MainWrapper from './MainWrapper'
import TransitionWrapper from './Transition'
import { Box, Image } from '@chakra-ui/react'
import notfound from '../assets/images/404.png'

const NotFound = () => {
    return (
        <>
            <MainWrapper pt={4} pb={8}>
                <TransitionWrapper direction={'down'}>
                    <Box textAlign={'center'}>
                        <Image margin={'auto'} width={['100%','100%','50%','50%']} src={notfound} />
                    </Box>
                </TransitionWrapper>
            </MainWrapper>
        </>
    )
}

export default NotFound
