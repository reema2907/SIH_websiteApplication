import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Flex,
  Button,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,useToast
} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const Navbar = () => {
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure();
  const { isOpen: isLogInOpen, onOpen: onLogInOpen, onClose: onLogInClose } = useDisclosure();
  const toast = useToast();
  return (
    <ChakraProvider>
      <Container maxW='full' bg='green.200' color='#262626'>
        <Flex justify='space-around' align='center' p='4'>
          <Box p='2'>
            <Heading size='md' fontSize='2xl' fontWeight='bold' letterSpacing='wide' fontFamily='cursive'>
              Prakash Bharat App
            </Heading>
          </Box>
          <Spacer />
          <Link to='/'>
            <Button variant='ghost'>Home</Button>
          </Link>
          <Link to='/about'>
            <Button variant='ghost'>About</Button>
          </Link>
          <Link to='/services'>
            <Button variant='ghost'>Services</Button>
          </Link>
          <Link to='/complaint'>
            <Button variant='ghost'>Complaint</Button>
            
          </Link>
          <Spacer />

          {/* Sign Up and Log In buttons with respective drawers */}
          <ButtonGroup>
            <Button colorScheme='teal' onClick={onSignUpOpen} mr={4}>
              Sign Up
            </Button>
            <Button colorScheme='teal' onClick={onLogInOpen}>
              Log In
            </Button>
          </ButtonGroup>

          {/* Sign Up Drawer */}
          <Drawer isOpen={isSignUpOpen} placement='right' onClose={onSignUpClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>
              <DrawerBody>
                <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
  <FormLabel>Last name</FormLabel>
  <Input placeholder='Last name' />
                </FormControl>
                <FormControl isRequired>
  <FormLabel>Username name</FormLabel>
  <Input placeholder='Username name' />
                </FormControl>
                <FormControl isRequired>
  <FormLabel>Password</FormLabel>
  <Input placeholder='Password' />
                </FormControl>
                <FormControl isRequired>
  <FormLabel>Confirm Password</FormLabel>
  <Input placeholder='Confirm Password' />
</FormControl>
              <FormControl isRequired>
  <FormLabel>Email Address</FormLabel>
  <Input placeholder='Email Address' />
                </FormControl>
                <FormControl isRequired>
  <FormLabel>Address</FormLabel>
  <Input placeholder='Address' />
</FormControl>
              </DrawerBody>
              <DrawerFooter>  
                 <Button colorScheme='blue'
      onClick={() => {
        // Create an example promise that resolves in 5s
        const examplePromise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(200), 5000)
        })

        // Will display the loading toast until the promise is either resolved
        // or rejected.
        toast.promise(examplePromise, {
          success: { title: 'Promise resolved', description: 'Registration Sucessfuly' },
          error: { title: 'Promise rejected', description: 'Something wrong' },
          loading: { title: 'Promise pending', description: 'Please wait' },
        })
      }}
    >
     SUBMIT
    </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>








          {/* Log In Drawer */}
          <Drawer isOpen={isLogInOpen} placement='right' onClose={onLogInClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Log In</DrawerHeader>
              <DrawerBody>
                <Input placeholder='Username' />
                <Input mt={4} placeholder='Password' type='password' />
              </DrawerBody>
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onLogInClose}>
                  Cancel
                </Button>
               <Button colorScheme='blue'
      onClick={() => {
        // Create an example promise that resolves in 5s
        const examplePromise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(200), 5000)
        })

        // Will display the loading toast until the promise is either resolved
        // or rejected.
        toast.promise(examplePromise, {
          success: { title: 'Promise resolved', description: 'Login Sucessfully' },
          error: { title: 'Promise rejected', description: 'Something wrong' },
          loading: { title: 'Promise pending', description: 'Please wait' },
        })
      }}
    >
     SUBMIT
    </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Navbar;
