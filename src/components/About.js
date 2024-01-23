import backgroundImage from '../images/backgservice.jpeg';
import background1 from '../images/street.jpg';
import { Flex, Box, Heading, Center, Divider, Text } from '@chakra-ui/react';
import { FaBold } from 'react-icons/fa';

function About() {
  const flexStyles = {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '900px',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  };

  const imageStyles = {
    width: '850px',
    height: '450px',
    bg: 'white',
    borderRadius: '8px',
    margin: '20px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <Flex bg='black' h='500px' color='white' justifyContent='flex-start'>
        <Box display='flex' alignItems='center'>
          <Heading fontFamily='cursive' fontSize='xxx-large'>ALL ABOUT PRAKASH BHARAT </Heading>
        </Box>
        <Box style={imageStyles}></Box>
      </Flex>

      <Center height='30px'>
        <Divider orientation='vertical' />
      </Center>

      <Flex style={flexStyles}>
        <Box display='flex' alignItems='center' flexDirection='column' textAlign='center'>
          <Text fontSize='x-large' >
           
            Prakash Bharat employs a path optimization technique that not only conserves fuel but
            also promotes energy efficiency.  
          </Text>
        
          
          <Text fontSize='x-large'  >
            Concurrently, real-time tracking of the electrician's location further enhances operational
            transparency and responsiveness. <br></br>This comprehensive approach ensures not only enhanced safety
            but also augments security during nighttime operations. 
          </Text>
         
           <Text fontSize='x-large'  >
           Each reported incident is assigned a unique
identification number, enabling seamless tracking &
ensuring a comprehensive<br></br> record  complaints.
⮚ In the event that a specific street light garners more
than three complaints within a 6-8 month timeframe, <br></br>it
is promptly escalated to our team of chief engineers for
evaluation and replacement.
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default About;
