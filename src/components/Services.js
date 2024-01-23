import backgroundImage from '../images/serviceimage.jpg';
import React from 'react';
import { Center, Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

function Complaint() {

   const redirectToComplaintPage = () => {
    // Redirect to complaint.html when the button is clicked
    window.location.href = '/complaint.html';
  };
  return (
    <div>
      <Center bg='black' h='900px' color='white'>
     
        <Box
          width='600px'
          height='600px'
          bg='white'
          borderRadius='8px'
          backgroundImage={`url(${backgroundImage})`}
          backgroundSize='cover'
          backgroundPosition='bottom'
          backgroundRepeat='no-repeat'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='flex-end'
        >
        </Box>
        <spacer />
        <Box bg='black'  borderRadius='8px' width='30%' ml={30}>
                    <Heading fontFamily='cursive' fontSize='x-large'>
                        <br />Our mission is to foster economic stability by providing gainful
employment opportunities to local electricians who may have
previously experienced uncertain income streams. In doing so, we
contribute significantly to the growth of the micro sector.
                    </Heading>
                    {/* Button inside the first box */}
                     <Button
    mt={50}
    color='white'
    bg='teal'
    fontFamily='cursive'
    fontWeight='bold'
                width='300px' // Adjust the width of the button
                height={45}
            borderRadius='10px' // Increase the border radius
            onClick={redirectToComplaintPage} // Handle button click
>
     ACCESS OPPORTUNITIES
</Button>
                </Box>

      </Center>
    </div>
  );
}

export default Complaint;
