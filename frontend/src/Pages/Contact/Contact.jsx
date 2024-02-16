import { Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { studentDetails } from '../../data'
import MainWrapper from '../../Components/MainWrapper'

const student = () => {
    useEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' });
    }, []);

    return (
        <>
                <MainWrapper pt={24} pb={12}>
                    <VStack gap={[6, 6, 8, 8]}>
                            <Heading width={'full'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Our <Text display={'inline'} fontSize={['2rem', '2.2rem', '2.2rem', '2.5rem']} color={'teal'}>Team</Text></Heading>

                            <Stack flexDirection={['column', 'column', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} alignItems={['center', 'center', 'flex-start', 'flex-start']} width={'full'} gap={8} >
                                {
                                    studentDetails.map((student, index) => {
                                        return (
                                            <StudentCard image={student.image} name={student.name} linkedin_url={student.linkedin_url} />
                                        )
                                    })
                                }
                            </Stack>
                    </VStack>
                </MainWrapper>
        </>
    )
}

const StudentCard = ({ image, name, linkedin_url }) => {

    return (<>
        <VStack boxShadow={'0px 0px 10px rgb(0,0,0,0.1)'} borderRadius={'10px'} width={['90%', '90%', '20%', '20%']} gap={4} p={4}>
            <Image width={'100%'} height={'300px'} objectFit={'cover'} borderRadius={'full'} src={image} />
            <VStack gap={0}>
                <Text fontSize={'1.2rem'} color={'teal'} fontWeight={'bold'}>{name}</Text>
                <a href={linkedin_url} target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            </VStack>
        </VStack>
    </>)
}
export default student