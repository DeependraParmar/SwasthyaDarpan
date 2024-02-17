import {
    Box,
    Center,
    Spinner,
    Text,
} from '@chakra-ui/react';


function Loading() {

    return (
        <Box as="section" w="full" h="100vh" position={'fixed'} top={0} zIndex={'1000'} display="flex" alignItems="center" background={'rgba(0, 0, 0, 0.75)'} justifyContent="center" transition={'all 0.5s ease-in-out'}>
            <Center py={6} px={8} background={'white'} rounded="md" shadow="md" display={'flex'} flexDir={'column'} gap={'2'}>
                <Spinner color='teal' thickness="3px" size={'xl'} emptyColor='purple.100' />
                <Text fontWeight={'semibold'} color='black'>Loading</Text>
            </Center>
        </Box>
    );
}

export default Loading;