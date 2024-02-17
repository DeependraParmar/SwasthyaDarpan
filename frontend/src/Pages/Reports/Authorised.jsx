import { Avatar, Box, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MainWrapper from '../../Components/MainWrapper'
import TransitionWrapper from '../../Components/Transition'
import { LineChart } from './Charts'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loading from '../../Components/Loading'

const Authorised = () => {
    const [user, setUser] = useState();

    const fetchUser = async () => {
        try {
            const { data } = await axios.post("http://192.168.137.17:5000/api/getuserdata", { userid: "12345678" });
            console.log(data);
            setUser(data);
        } catch (error) {
            toast.error('Error fetching user data');
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    if (!user || !user.healthData || user.healthData.length === 0) {
        return <Loading />
    }


    const lastItem = user.healthData[user.healthData.length - 1]

    const filterData = (dataset, feature) => {
        return dataset.map(item => item[feature]);
    }

    const heartRate = filterData(user.healthData, 'heartRate');
    const spo2 = filterData(user.healthData, 'spO2');
    const glucose = filterData(user.healthData, 'glucose');
    const temperature = filterData(user.healthData, 'temperature');

    const createdAt = filterData(user.healthData, 'created_at');
    
    const filterDate = (utcDates) => {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const localDateStrings = [];

        for (let index = 0; index < utcDates.length; index++) {
            const date = new Date(utcDates[index]);
            const month = monthNames[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            const dateString = `${day} ${month} ${year}`;
            localDateStrings.push(dateString);
        }

        return localDateStrings;
    }


    const filteredDate = filterDate(createdAt);

    return (
        <>
            <MainWrapper pt={24} pb={12}>
                <TransitionWrapper>
                        <VStack justifyContent={['center']} width={['95%', '95%', '95%', '95%']} gap={8}>
                            <VStack>
                            <Heading>Hi, {user.name}</Heading>
                            <Text fontSize={'largerx'}>Your Health Report</Text>
                            </VStack>
                            <Avatar background={'teal'} color={'white'} name={user.name} size={'2xl'} />

                            {/* Table for following readings */}

                            <Box width={'35%'} >
                                <table>
                                    <tr>
                                        <th>Heart Rate</th>
                                        <td><b>{lastItem.heartRate}</b> BPM</td>
                                    </tr>
                                    <tr>
                                        <th>SPO2</th>
                                        <td><b>{lastItem.spo2}</b> %</td>
                                    </tr>
                                    <tr>
                                        <th>Glucose</th>
                                        <td><b>{lastItem.glucose}</b> mmol/L</td>
                                    </tr>
                                    <tr>
                                        <th>Temperature</th>
                                        <td><b>{lastItem.temperature}</b> ⁰C</td>
                                    </tr>
                                </table>
                            </Box>
                        </VStack>
                        <VStack gap={12} mt={24} alignItems={'center'} width={'full'}>
                                <VStack width={'70%'}>
                                <Heading fontSize={'x-large'} textAlign={'center'}>Heart Rate</Heading>
                                <LineChart xdata={filteredDate} heading={"Heart Rate"} ydata={heartRate} />
                                </VStack>
                                <VStack width={'70%'}>
                                <Heading fontSize={'x-large'} textAlign={'center'}>SpO2 Level</Heading>
                                <LineChart xdata={filteredDate} heading={"SpO2"} ydata={spo2} />
                                </VStack>
                                <VStack width={'70%'}>
                                <Heading fontSize={'x-large'} textAlign={'center'}>Glucose Level</Heading>
                                <LineChart xdata={filteredDate} heading={"Glucose Level"} ydata={glucose} />
                                </VStack>
                                <VStack width={'70%'}>
                                <Heading fontSize={'x-large'} textAlign={'center'}>Body Temperature</Heading>
                                <LineChart xdata={filteredDate} heading={"Temperature"} ydata={temperature} />
                                </VStack>
                        </VStack>
                </TransitionWrapper>
            </MainWrapper>
        </>
    )
}

export default Authorised
