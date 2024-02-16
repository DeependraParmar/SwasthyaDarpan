import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineIdcard, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiHide, BiLogIn, BiLogOut, BiShowAlt } from 'react-icons/bi';
import { BsDoorOpen } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import { GrClose } from "react-icons/gr";
import { IoIosInformationCircleOutline, } from 'react-icons/io';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLockReset, MdOutlinePassword } from 'react-icons/md';
import { RiLockPasswordLine, RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import logo from "../../assets/images/logo.png";
import { headerLinks } from '../../data';
import "../../styles/App.scss";

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
    const { isOpen: isForgotOpen, onOpen: onForgotOpen, onClose: onForgotClose } = useDisclosure();
    const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show);

    const handleForgotPasswordModal = () => {
        onLoginClose();
        onForgotOpen();
    }
    const handleOTPModal = () => {
        onForgotClose();
        onOtpOpen();
    }
    const handleLoginClick = () => {
        onDrawerClose();
        onLoginOpen();
    }

    return <Box display={'flex'} gap={'2'}>
        {
            isAuthenticated ?
                <>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
                    <Text color={'teal'}>Welcome to Swaasthya Darpan</Text>
                    <Text fontSize={'xs'} fontWeight={'normal'}></Text>
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
                                            <Input required={true} type='text' placeholder='Name' focusBorderColor='teal'
                                                fontSize={'sm'} />
                                        </InputGroup>

                                        <InputGroup size={'md'}>
                                            <InputLeftElement pointerEvents='none'>
                                                <AiOutlineMail color='gray.300' />
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

                                        <Button width={'full'} type='submit' colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Register</Button>

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
                                        <Text textAlign={'center'} fontSize={'xs'} cursor={'pointer'} fontWeight={'medium'} color='teal' onClick={() => handleForgotPasswordModal()} >Forgot Password?</Text>
                                    </Stack>
                                </form>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>

        {/* modal for forgot password  */}
        <Modal blockScrollOnMount={true} isOpen={isForgotOpen} onClose={onForgotClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text color={'teal.600'}>Forgot Password</Text>
                    <Text fontSize={'xs'} fontWeight={'normal'}>Provide your account's email address to get a Password Reset & Verification Link</Text>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    <form action="">
                        <Stack spacing={'3'}>
                            <InputGroup size={'md'}>
                                <InputLeftElement pointerEvents='none'>
                                    <AiOutlineMail color='gray.300' />
                                </InputLeftElement>
                                <Input required={true} type='email' placeholder='Email' focusBorderColor='teal'
                                    fontSize={'sm'} />
                            </InputGroup>
                            <Button width={'full'} type='submit' colorScheme='teal' variant='solid' size='md' fontSize={'sm'}>Get Verification Link</Button>
                            <Text fontSize={'xs'} fontWeight={'normal'} textAlign={'center'} lineHeight={'0'}>or</Text>
                            <Link><Button width={'full'} type='submit' variant='solid' size='md' gap={'2'} fontSize={'sm'}><Text onClick={(e) => handleOTPModal()} fontWeight={'medium'}>Verify using OTP</Text></Button></Link>
                        </Stack>
                    </form>
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