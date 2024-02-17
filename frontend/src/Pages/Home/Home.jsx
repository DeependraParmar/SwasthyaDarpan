import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import MainWrapper from '../../Components/MainWrapper'
import TransitionWrapper from '../../Components/Transition'
import banner from '../../assets/images/banner.png'
import contacts from '../../assets/images/contacts.png'
import details from '../../assets/images/details.png'
import locate from '../../assets/images/locate.png'
import { useTranslation } from 'react-i18next'


const Home = () => {
    const {t} = useTranslation();
    return (
        <MainWrapper pt={[20, 20, 20, 20]} pb={12}>
            <Stack flexDir={['column-reverse', 'column-reverse', 'row', 'row']} gap={8} justifyContent={['flex-start', 'flex-start', 'center', 'center']} alignItems={'center'}>
                <VStack alignItems={'flex-start'} width={['90%', '95%', '40%', '40%']}>
                    <TransitionWrapper direction={'up'}>
                        <Heading mt={2} colorScheme='teal'>{t('1')}</Heading>
                        <Text mt={2} fontSize={['sm', 'sm', 'md', 'md']}>{t('2')}</Text>
                        <Text mt={2} fontSize={['xs', 'xs', 'sm', 'sm']}>{t('3')}</Text>

                        <HStack>
                            <Button mt={2} colorScheme='teal' size={'sm'} variant={'solid'}>{t('4')}</Button>
                            <Button mt={2} size={'sm'}><a href='#how-it-works'>{t('5')}</a> </Button>
                        </HStack>
                    </TransitionWrapper>
                </VStack>
                <Box width={['100%', '95%', '50%', '50%']}>
                    <TransitionWrapper direction={'down'}>
                        <Image width={'100%'} src={banner} />
                    </TransitionWrapper>
                </Box>
            </Stack>


            <Heading mt={24} colorScheme='teal' textAlign={'center'}>{t('5')}</Heading>
            <Stack flexDir={['column-reverse', 'column-reverse', 'row', 'row']} gap={8} justifyContent={['flex-start', 'flex-start', 'center', 'center']} id='how-it-works' mt={12} spacing={8}>
                <Stack flexDir={['column', 'column', 'row', 'row']} gap={[8,8,12,12]} justifyContent={'center'} alignItems={'center'}>
                    <VStack p={4} borderRadius={'20px'} gap={2} height={'100%'} boxShadow={'0px 0px 20px rgba(0,0,0,0.2)'} alignItems={'flex-start'} justifyContent={'flex-start'} width={['90%', '90%', '30%', '30%']}>
                        <TransitionWrapper direction={'down'}>
                            <Heading colorScheme='teal'>{t('6')}</Heading>
                            <Text mt={2}>{t('7')}</Text>
                            <Image mt={4} src={locate} />
                        </TransitionWrapper>
                    </VStack>
                    <VStack p={4} borderRadius={'20px'} justifyContent={'flex-start'} boxShadow={'0px 0px 10px rgba(0,0,0,0.2)'} height={'100%'} alignItems={'flex-start'} width={['90%', '90%', '30%', '30%']}>
                        <TransitionWrapper direction={'up'}>
                            <Heading colorScheme='teal'>{t('8')}</Heading>
                            <Text mt={2}>{t('9')}</Text>
                            <Image mt={4} src={details} />
                        </TransitionWrapper>
                    </VStack>
                    <VStack p={4} borderRadius={'20px'} justifyContent={'flex-start'} boxShadow={'0px 0px 10px rgba(0,0,0,0.2)'} height={'100%'} alignItems={'flex-start'} width={['90%', '90%', '30%', '30%']}>
                        <TransitionWrapper direction={'down'}>
                            <Heading colorScheme='teal'>{t('10')}</Heading>
                            <Text mt={2}>{t('11')}</Text>
                            <Image mt={4} src={contacts} />
                        </TransitionWrapper>
                    </VStack>
                </Stack>
            </Stack>
        </MainWrapper >
    )
}

export default Home
