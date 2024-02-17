import React from 'react'
import MainWrapper from '../../Components/MainWrapper'
import { Avatar, Box, Heading, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const Public = () => {
    const {name, heartrate, spo2, glucose, temperature} = useParams();

  return (
    <MainWrapper pt={[24,24,20,20]} pb={12}>
        <VStack gap={8}>
            <Heading>Your Health Report</Heading>
            <Avatar background={'teal'} size={'2xl'} name={name} />
            
            {/* Table for following readings */}

            <Box width={['90%','90%','30%','30%']} >
                  <table>
                        <tr>
                            <th>Name</th>
                          <td><b>{name}</b></td>
                        </tr>
                      <tr>
                          <th>Heart Rate</th>
                          <td><b>{heartrate}</b> BPM</td>
                      </tr>
                      <tr>
                          <th>SPO2</th>
                          <td><b>{spo2}</b> %</td>
                      </tr>
                      <tr>
                          <th>Glucose</th>
                          <td><b>{glucose}</b> mmol/L</td>
                      </tr>
                      <tr>
                          <th>Temperature</th>
                          <td><b>{temperature}</b> ⁰C</td>
                      </tr>
                  </table>
            </Box>
        </VStack>
    </MainWrapper>
  )
}

export default Public
