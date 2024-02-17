import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineIdcard, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiHide, BiLogIn, BiLogOut, BiShowAlt } from 'react-icons/bi';
import { BsDoorOpen } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { FaAngleDown, FaPhoneAlt } from 'react-icons/fa';
import { GoNumber } from 'react-icons/go';
import { GrClose } from "react-icons/gr";
import { IoIosInformationCircleOutline, } from 'react-icons/io';
import { IoHomeOutline } from "react-icons/io5";
import { MdFamilyRestroom, MdOutlineLockReset, MdOutlinePassword, MdOutlinePhone } from 'react-icons/md';
import { RiLockPasswordLine, RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import logo from "../../assets/images/logo.png";
import { headerLinks } from '../../data';
import "../../styles/App.scss";
import { PiIdentificationCardThin } from 'react-icons/pi';
import {FaUserDoctor} from 'react-icons/fa6';

const Header = () => {
    const isAuthenticated = false;

    return (
        <>
            <Box boxShadow={'sm'} py={'2'} px={'6'} backdropFilter={'blur(10px)'} display={['flex']} alignItems={['center']} justifyContent={['space-between']} zIndex={1000} position={'fixed'} width={'full'} top={0} >
                <NavLogo logo={logo} />
                <NavProfile isAuthenticated={isAuthenticated} />
            </Box>
        </>
    )
}

function NavButtonComponent({ name, route, className }) {
    return <Link className='width-full' style={{ fontSize: "0.9rem" }} to={route}>{name}</Link>
}

const NavLogo = React.memo(({ logo }) => {
    return <Link to={'/'}>
        <Box display={['flex']} alignItems={'center'} gap={2} justifyContent={'center'} >
            <Image width={'10'} src={logo} dropShadow={'0px 0px 10px #f9c307'} />
            <Button variant={'unstyled'} display={['none', 'none', 'block', 'block']} colorScheme='teal' fontSize={['xs', 'xs', 'md', 'md']} fontWeight={'bold'} >Swaasthya Darpan</Button>
        </Box>
    </Link>
});

const NavProfile = React.memo(({ isAuthenticated }) => {
    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
    const {isOpen: isStep2Open, onOpen: onStep2Open, onClose: onStep2Close} = useDisclosure();
    const {isOpen: isStep3Open, onOpen: onStep3Open, onClose: onStep3Close} = useDisclosure();
    const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [password, setPassword] = useState('');
    const [isDiabetic, setIsDiabetic] = useState();
    const [isHypertension, setIsHypertension] = useState();
    const [isHypotension, setIsHypotension] = useState();
    const [doctorName, setDoctorName] = useState('');
    const [doctorPhone, setDoctorPhone] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [familyPhone, setFamilyPhone] = useState('');


    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show);

    const handleStep2 = () => {
        onLoginClose();
        onStep2Open();
    }
    const handleStep3 = () => {
        onStep2Close();
        onStep3Open();
    }    
    const handleLoginClick = () => {
        onDrawerClose();
        onLoginOpen();
    }
    const goBack01 = () => {
        onStep2Close();
        onLoginOpen();
    }
    const goBack02 = () => {
        onStep3Close();
        onStep2Open();
    }
    const submitHandler = () => {
        onStep3Close();
        onLoginClose();
        console.log(name, age, phone, email, aadhar, password, isDiabetic, isHypertension, isHypotension, doctorName, doctorPhone, familyName, familyPhone);
    }

    return <Box display={'flex'} gap={'2'}>
        {
            isAuthenticated ?
                <>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                            Menu
                        </MenuButton>
                        <MenuList>
                            {
                                headerLinks.map((link, index) => {
                                    return <MenuItem>
                                        <NavButtonComponent key={index} name={link.name} route={link.route} /></MenuItem>
                                })
                            }
                        </MenuList>
                    </Menu>
                    <Box display={['block', 'block', 'none', 'none']}>
                        <Button onClick={onDrawerOpen} colorScheme='teal' variant={'solid'}><RiMenuFill /></Button>
                    </Box>
                </>
                :
                <>
                    <Menu>
                        <MenuButton display={['none', 'none', 'block', 'block']} fontSize={'sm'} as={Button} rightIcon={<FaAngleDown />}>
                            Menu
                        </MenuButton>
                        <MenuList>
                            {
                                headerLinks.map((link, index) => {
                                    return <MenuItem>
                                        <NavButtonComponent key={index} name={link.name} route={link.route} /></MenuItem>
                                })
                            }
                        </MenuList>
                    </Menu>
                    <ColorModeSwitcher />
                    <Button display={['none', 'none', 'block', 'block']} onClick={onLoginOpen} variant={'solid'} colorScheme={'teal'} color={'white'} fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']} gap={2}><HStack><BiLogIn /><Text>Login</Text></HStack></Button>
                    <Button display={['block', 'block', 'none', 'none']} onClick={onDrawerOpen} colorScheme='teal' variant={'solid'}><RiMenuFill /></Button>
                </>
        }

        <Modal blockScrollOnMount={true} isOpen={isLoginOpen} onClose={onLoginClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <HStack>
                        <Text>Welcome to</Text>
                        <Text color={'teal'} fontWeight={'bold'}>Swaasthya Darpan</Text>
                    </HStack>
                    <Text fontSize={'xs'} fontWeight={'normal'}>Enter your personal details for further proceeding....</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Tabs isFitted colorScheme='teal' size='md' variant='enclosed'>
                        <TabList>
                            <Tab gap={'1'}><BsDoorOpen /><Text>Register</Text></Tab>
                            <Tab gap={'1'}><BiLogIn /><Text>Login</Text></Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="0.1rem"
                            bg="teal"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <form action="">
                                    <Stack spacing={3}>
                                        <InputGroup size={'md'}>
                                            <InputLeftElement pointerEvents='none'>
                                                <AiOutlineIdcard color='gray.300' />
                                            </InputLeftElement>
                                            <Input value={name} onChange={e => setName(e.target.value)} required={true} type='text' placeholder='Name' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size={'md'}>
                                            <InputLeftElement pointerEvents='none'>
                                                <GoNumber color='gray.300' />
                                            </InputLeftElement>
                                            <Input value={age} onChange={e => setAge(e.target.value)}  required={true} type='number' placeholder='Age' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size={'md'}>
                                            <InputLeftElement pointerEvents='none'>
                                                <MdOutlinePhone color='gray.300' />
                                            </InputLeftElement>
                                            <Input value={phone} onChange={e => setPhone(e.target.value)} required={true} type='number' placeholder='Phone Number' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size={'md'}>
                                            <InputLeftElement pointerEvents='none'>
                                                <AiOutlineMail color='gray.300' />
                                            </InputLeftElement>
                                            <Input value={email} onChange={e => setEmail(e.target.value)} required={true} type='email' placeholder='Email' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size={'md'}>
                                            <InputLeftElement pointerEvents='none'>
                                                <PiIdentificationCardThin color='gray.300' />
                                            </InputLeftElement>
                                            <Input value={aadhar} onChange={e => setAadhar(e.target.value)} required={true} type='number' placeholder='Aadhar Number' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size='md'>
                                            <InputLeftElement>
                                                <RiLockPasswordLine />
                                            </InputLeftElement>
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Password'
                                                focusBorderColor='teal'
                                                fontSize={'sm'}
                                                required={true}
                                                value={password} onChange={e => setPassword(e.target.value)} 
                                            />
                                            <InputRightElement>
                                                <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                                    {show ? <BiHide /> : <BiShowAlt />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>


                                        <Button width={'full'} onClick={handleStep2} colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Go to Step 02</Button>

                                    </Stack>
                                </form>
                            </TabPanel>
                            <TabPanel>
                                <form action="">
                                    <Stack spacing={3}>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <AiOutlineMail />
                                            </InputLeftElement>
                                            <Input value={email} onChange={e => setEmail(e.target.value)} required={true}  type='email' placeholder='Email' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size='md'>
                                            <InputLeftElement>
                                                <RiLockPasswordLine />
                                            </InputLeftElement>
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Password'
                                                focusBorderColor='teal'
                                                fontSize={'sm'}
                                                required={true}
                                                value={password} onChange={e => setPassword(e.target.value)}
                                            />
                                            <InputRightElement>
                                                <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                                    {show ? <BiHide /> : <BiShowAlt />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>

                                        <Button width={'full'} type='submit' colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Login</Button>
                                    </Stack>
                                </form>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>

        <Modal blockScrollOnMount={true} isOpen={isStep2Open} onClose={onStep2Close}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <HStack>
                        <Text>Welcome to</Text>
                        <Text color={'teal'} fontWeight={'bold'}>Swaasthya Darpan</Text>
                    </HStack>
                    <Text fontSize={'xs'} fontWeight={'normal'}>Enter your medical related information</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Tabs isFitted colorScheme='teal' size='md' variant='enclosed'>
                        <TabList>
                            <Tab gap={'1'}><BsDoorOpen /><Text>Register</Text></Tab>
                            <Tab gap={'1'}><BiLogIn /><Text>Login</Text></Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="0.1rem"
                            bg="teal"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <form action="">
                                    <Stack spacing={3}>
                                        <Select value={isDiabetic} onChange={e => setIsDiabetic(e.target.value)} focusBorderColor='teal' placeholder={`Are you a diabetic patient`} size={'sm'} fontSize={'xs'}>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </Select>
                                        <Select value={isHypertension} onChange={e => setIsHypertension(e.target.value)} focusBorderColor='teal' placeholder={`Are you a hypertension patient`} size={'sm'} fontSize={'xs'}>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </Select>
                                        <Select value={isHypotension} onChange={e => setIsHypotension(e.target.value)} focusBorderColor='teal' placeholder={`Are you a hypotension patient`} size={'sm'} fontSize={'xs'}>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </Select>

                                        <HStack>
                                            <Button width={'full'} onClick={goBack01} variant='solid' size='md' fontSize={'sm'}>Go Back</Button>
                                            <Button width={'full'} onClick={handleStep3} colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Final Step Ahead</Button>
                                        </HStack>

                                    </Stack>
                                </form>
                            </TabPanel>
                            <TabPanel>
                                <form action="">
                                    <Stack spacing={3}>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <AiOutlineMail />
                                            </InputLeftElement>
                                            <Input value={email} onChange={e => setEmail(e.target.value)} required={true} type='email' placeholder='Email' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size='md'>
                                            <InputLeftElement>
                                                <RiLockPasswordLine />
                                            </InputLeftElement>
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Password'
                                                focusBorderColor='teal'
                                                fontSize={'sm'}
                                                required={true}
                                                value={password} onChange={e => setPassword(e.target.value)}
                                            />
                                            <InputRightElement>
                                                <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                                    {show ? <BiHide /> : <BiShowAlt />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>

                                        <Button width={'full'} type='submit' colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Login</Button>
                                    </Stack>
                                </form>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>

        <Modal blockScrollOnMount={true} isOpen={isStep3Open} onClose={onStep3Close}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <HStack>
                        <Text>Welcome to</Text>
                        <Text color={'teal'} fontWeight={'bold'}>Swaasthya Darpan</Text>
                    </HStack>
                    <Text fontSize={'xs'} fontWeight={'normal'}>Enter your doctor & emergency information</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Tabs isFitted colorScheme='teal' size='md' variant='enclosed'>
                        <TabList>
                            <Tab gap={'1'}><BsDoorOpen /><Text>Register</Text></Tab>
                            <Tab gap={'1'}><BiLogIn /><Text>Login</Text></Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="0.1rem"
                            bg="teal"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <form action="">
                                    <Stack spacing={3}>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <FaUserDoctor />
                                            </InputLeftElement>
                                            <Input value={doctorName} onChange={e => setDoctorName(e.target.value)} required={true} type="text" placeholder="Doctor's Name" focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <MdOutlinePhone />
                                            </InputLeftElement>
                                            <Input value={doctorPhone} onChange={e => setDoctorPhone(e.target.value)} required={true} type="text" placeholder="Doctor's Phone Number" focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <MdFamilyRestroom />
                                            </InputLeftElement>
                                            <Input value={familyName} onChange={e => setFamilyName(e.target.value)} required={true} type="text" placeholder="Family Member's Name" focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <MdOutlinePhone />
                                            </InputLeftElement>
                                            <Input value={familyPhone} onChange={e => setFamilyPhone(e.target.value)} required={true} type="text" placeholder="Family Member's Phone Number" focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <HStack>
                                            <Button width={'full'} onClick={goBack02} variant='solid' size='md' fontSize={'sm'}>Go Back</Button><Button width={'full'} onClick={submitHandler} colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Submit Now</Button>
                                        </HStack>

                                    </Stack>
                                </form>
                            </TabPanel>
                            <TabPanel>
                                <form action="">
                                    <Stack spacing={3}>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <AiOutlineMail />
                                            </InputLeftElement>
                                            <Input required={true} type='email' placeholder='Email' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size='md'>
                                            <InputLeftElement>
                                                <RiLockPasswordLine />
                                            </InputLeftElement>
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Password'
                                                focusBorderColor='teal'
                                                fontSize={'sm'}
                                                required={true}
                                            />
                                            <InputRightElement>
                                                <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                                    {show ? <BiHide /> : <BiShowAlt />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>

                                        <Button width={'full'} type='submit' colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Login</Button>
                                    </Stack>
                                </form>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>

        {/* Drawer for the small screen  */}
        <Drawer placement="left" isOpen={isDrawerOpen} onClose={onDrawerClose}>
            <DrawerOverlay backdropFilter={'blur(3px)'} />
            <DrawerContent>
                <DrawerHeader borderBottomWidth={'2px'}>
                    <Link to={'/'} onClick={onDrawerClose}>
                        <Box display={['flex']} gap={2} alignItems={'center'} justifyContent={'flex-start'} >
                            <Image width={'10'} src={logo} dropShadow={'0px 0px 10px #f9c307'} />
                            <Text fontWeight={'bold'} fontSize={'xs'} display={'relative'} bottom={'-4'}>Swaasthya Darpan</Text>
                        </Box>
                    </Link>
                    <Button colorScheme='gray' size={'sm'} position={'absolute'} right={'5'} top={'4'} onClick={onDrawerClose} >
                        <GrClose />
                    </Button>
                </DrawerHeader>

                <DrawerBody >
                    <Menu >
                        <MenuGroup>
                            <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "teal", color: 'white' }} gap={'2'}><IoHomeOutline /><Link className='width-full' to={'/'}> Home</Link></MenuItem>
                            <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "teal", color: "white" }} gap={'2'}><IoIosInformationCircleOutline /><Link className='width-full' to={'/about'}>About</Link></MenuItem>
                            <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "teal", color: "white" }} gap={'2'}><CiPhone /><Link className='width-full' to={'/contact'}>Contact</Link></MenuItem>
                        </MenuGroup>
                        <MenuDivider />

                        {
                            isAuthenticated ?
                                <MenuGroup>
                                    <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "teal", color: "white" }} gap={'2'}><AiOutlineUser /><Link className='width-full' to={'/profile'}> Profile</Link></MenuItem>
                                    <MenuItem fontSize={'sm'} gap={'2'} onClick={onDrawerClose} _hover={{ bg: "teal", color: "white" }}><MdOutlinePassword /><Link className='width-full' to={'/forgot-password'}>Forgot Password</Link></MenuItem>
                                    <MenuItem fontSize={'sm'} gap={'2'} onClick={onDrawerClose} _hover={{ bg: "teal", color: "white" }}><MdOutlineLockReset /><Link className='width-full' to={'/reset-password'}>Reset Password</Link></MenuItem>
                                </MenuGroup>
                                :
                                ""
                        }
                        <MenuGroup>
                            {
                                isAuthenticated ?
                                    <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "teal", color: "white" }} gap={'2'}><BiLogOut /><Link className='width-full' to={'/logout'}>Logout</Link></MenuItem>
                                    :
                                    <MenuItem fontSize={'sm'} onClick={handleLoginClick} _hover={{ bg: "teal", color: "white" }} gap={'2'}><BiLogIn /><Link className='width-full'>Login</Link></MenuItem>
                            }
                        </MenuGroup>
                    </Menu>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box>
});


export default Header;